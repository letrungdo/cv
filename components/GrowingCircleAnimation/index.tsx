import { debounce } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { throttle } from "utils/common";
import styles from "./style.module.scss";

const COLORS = {
    white: "#f1efef",
    midnightBlack: "#2b2c2c",
};

const RADIUS_GROWTH_PER_MS = 0.025;
const GROWTH_FUNCTION_EXPONENTIAL = 2.9;
// We don't need such a high resolution for this type of animation. Plus a lower resolution makes
// the edges of the circle look blurred, which looks nicer. Improves performance a lot on slow GPUs
const PIXEL_SCALING_FACTOR = 0.5;

const circleCenterCoordinates = {
    x: -1,
    y: -1,

    resetMouseState: () => {
        circleCenterCoordinates.x = -1;
        circleCenterCoordinates.y = -1;
    },
};

// circle animation state machine
const m = {
    ctx: null as unknown as CanvasRenderingContext2D, // canvas context
    isDark: null as boolean | null,
    radiusMultiplier: -1,
    maxRadiusMultiplier: -1,
    timeAtPreviousDraw: -1,
    height: -1,
    width: -1,

    createMachine: (ctx: CanvasRenderingContext2D, isDark: boolean) => {
        m.ctx = ctx;
        m.isDark = isDark;
        // window.screen.height and width are not reliable on iPad Safari. Use window.inner instead.
        m.height = Math.max(window.screen.height, window.innerHeight);
        m.width = Math.max(window.screen.width, window.innerWidth);
        m.maxRadiusMultiplier = Math.max(m.width, m.height) ** (1.0 / GROWTH_FUNCTION_EXPONENTIAL);
        m.timeAtPreviousDraw = Date.now();

        // adjust canvas pixel ratio (resolution)
        const { width, height } = m.ctx.canvas.getBoundingClientRect();
        if (m.ctx.canvas.width !== width || m.ctx.canvas.height !== height) {
            const { devicePixelRatio: originalRatio = 1 } = window;
            const lowerResolutionRatio = originalRatio * PIXEL_SCALING_FACTOR;
            m.ctx.canvas.width = width * lowerResolutionRatio;
            m.ctx.canvas.height = height * lowerResolutionRatio;
            m.ctx.scale(lowerResolutionRatio, lowerResolutionRatio);
        }

        // If mouse coordinates are not set, there should be no animation. Skip the whole thing.
        // This also skips the animation when the window is resized because we remove the mouse coords.
        if (circleCenterCoordinates.x == -1 || circleCenterCoordinates.y == -1) {
            m.radiusMultiplier = isDark ? 0 : m.maxRadiusMultiplier;
        }

        return m.start;
    },
    start: () => (m.isDark ? m.shrinkCircle : m.growCircle),

    growCircle: () => {
        m.radiusMultiplier += RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);

        return m.verifyCircleBounds;
    },

    shrinkCircle: () => {
        m.radiusMultiplier -= RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);

        return m.verifyCircleBounds;
    },

    verifyCircleBounds: () => {
        if ((m.radiusMultiplier <= 0 && m.isDark) || (m.radiusMultiplier >= m.maxRadiusMultiplier && !m.isDark)) {
            // just fill the canvas - at the limit. no more drawing is necessary.
            m.ctx.fillStyle = m.isDark ? COLORS.midnightBlack : COLORS.white;
            m.ctx.fillRect(0, 0, m.width, m.height);
            // reset radius multiplier values in case we overshoot (can get negative value when shrinking)
            m.radiusMultiplier = m.isDark ? 0 : m.maxRadiusMultiplier;

            return null; // no next step - end of state machine
        }

        // clear canvas before drawing the next circle
        m.ctx.clearRect(0, 0, m.width, m.height);

        return m.drawCircle;
    },

    drawCircle: () => {
        m.ctx.fillStyle = COLORS.white;
        m.ctx.beginPath();
        m.ctx.arc(
            circleCenterCoordinates.x,
            circleCenterCoordinates.y,
            m.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
            0,
            2 * Math.PI,
        );
        m.ctx?.fill();

        // Note the time when we start drawing. This will be used to determine how much time has passed
        // since last draw. Circle growth is based on time delta, not CPU performance
        m.timeAtPreviousDraw = Date.now();

        return new Promise((rtn) => {
            const returnAfterAnimating = () => {
                rtn(m.start);
            };
            window.requestAnimationFrame(returnAfterAnimating);
        });
    },
};
interface Props {
    isDark: boolean;
}
const GrowingCircleAnimation = ({ isDark }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        let stateMachine = m.createMachine(ctx, isDark) as any;
        let isStateMachinePowered = true;

        const stateMachineRunner = () => {
            if (stateMachine !== null && isStateMachinePowered) {
                if (stateMachine instanceof Function) {
                    stateMachine = stateMachine();
                    stateMachineRunner();
                } else {
                    stateMachine.then((val: any) => {
                        stateMachine = val();
                        stateMachineRunner();
                    });
                }
            }
        };

        stateMachineRunner();

        const handleClick = (event: any) => {
            // fill in the mouse coordinates when we receive a click so we know the center of the circle
            circleCenterCoordinates.x = event.detail.x;
            circleCenterCoordinates.y = event.detail.y;
        };

        const handleResize = () => {
            circleCenterCoordinates.resetMouseState();
            stateMachine = m.createMachine(ctx, isDark);
            stateMachineRunner();
        };

        window.addEventListener("darkModeToggle", handleClick);
        window.addEventListener("resize", throttle(debounce(handleResize, 250)), false);

        return () => {
            isStateMachinePowered = false;
            window.removeEventListener("darkModeToggle", handleClick);
            window.removeEventListener("resize", throttle(debounce(handleResize)), false);
        };
    }, [isDark]);

    return <canvas className={styles.size} ref={canvasRef} />;
};

export default GrowingCircleAnimation;
