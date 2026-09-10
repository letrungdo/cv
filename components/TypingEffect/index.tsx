import { useEffect, useMemo, useState } from "react";

const CURSOR_BLINK_MS = 500;

type Props = {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    cursor?: string;
    className?: string;
};

/**
 * Replaces react-typing-effect, which bundled its own copy of React 16 and so
 * built elements that React 19 refuses to render. The emitted DOM and the
 * timing state machine are the same as the package it replaces, defaults
 * included.
 */
const TypingEffect = ({
    text,
    speed = 200,
    eraseSpeed = 200,
    typingDelay = 2500,
    eraseDelay = 5000,
    cursor = "|",
    className,
}: Props) => {
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const texts = useMemo(() => (typeof text === "string" ? [text] : [...text]), [text]);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        let index = 0;
        let shown = "";

        const type = () => {
            const raw = texts[index];
            if (raw.length > shown.length) {
                shown = raw.substring(0, shown.length + 1);
                setDisplayText(shown);
                timeout = setTimeout(type, speed);

                return;
            }
            timeout = setTimeout(erase, eraseDelay);
        };

        const erase = () => {
            if (shown.length === 0) {
                index = index + 1 === texts.length ? 0 : index + 1;
                // the original re-applies typingDelay before every string, not just the first
                timeout = setTimeout(type, typingDelay);

                return;
            }
            shown = shown.substring(0, shown.length - 1);
            setDisplayText(shown);
            timeout = setTimeout(erase, eraseSpeed);
        };

        timeout = setTimeout(type, typingDelay);

        return () => clearTimeout(timeout);
    }, [texts, speed, eraseSpeed, typingDelay, eraseDelay]);

    useEffect(() => {
        const interval = setInterval(() => setCursorVisible((visible) => !visible), CURSOR_BLINK_MS);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={className}>
            <div style={{ display: "inline-block" }}>{displayText}</div>
            <span
                style={{
                    display: "inline-block",
                    msTransition: "opacity 0.5s",
                    WebkitTransition: "opacity 0.5s",
                    MozTransition: "opacity 0.5s",
                    transition: "opacity 0.5s",
                    opacity: cursorVisible ? 1 : 0,
                }}
            >
                {cursor}
            </span>
        </span>
    );
};

export default TypingEffect;
