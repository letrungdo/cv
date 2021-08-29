import { makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { logDev } from "utils/logs";

type Props = {
    name: string;
    value: number;
    bgColor: string;
};

const useStyles = makeStyles<Theme, { bgColor: string; width: string | number }>({
    root: {
        marginBottom: "2rem",
    },
    skillInfo: {
        "& h4": {
            fontSize: "1.6rem",
            fontWeight: 500,
        },
        "& span": {
            fontSize: "1.4rem",
        },
    },
    progress: {
        height: 7,
        marginBottom: 0,
        overflow: "hidden",
        backgroundColor: "var(--progress-bg)",
        borderRadius: 15,
        boxShadow: "none",
    },
    progressBar: {
        borderRadius: 15,
        float: "left",
        width: ({ width }) => width,
        height: "100%",
        fontSize: "1.2rem",
        lineHeight: 7,
        color: "var(--secondary-text)",
        textAlign: "center",
        backgroundColor: ({ bgColor }) => bgColor,
        boxShadow: "none",
        transition: "width 0.6s ease",
    },
});

const SkillItem = ({ name, value, bgColor }: Props) => {
    const [width, setWidth] = useState<number | string>(0);
    const classes = useStyles({ bgColor, width });
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const progress = progressRef.current;
        if (!progress) return;
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(progress);
                    observer.disconnect();
                    setWidth(`${value}%`);
                }
            });
        };
        const observer = new IntersectionObserver(callback);
        observer.observe(progress);
    }, [value]);

    return (
        <div className={`${classes.root}`}>
            <div className={`${classes.skillInfo} clearfix`}>
                <b className="float-left mt-0">{name}</b>
                <span className="float-right">{value}%</span>
            </div>
            <div ref={progressRef} className={classes.progress}>
                <div
                    className={classes.progressBar}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={value}
                    aria-label={`Progress ${name}`}
                />
            </div>
        </div>
    );
};

export default SkillItem;
