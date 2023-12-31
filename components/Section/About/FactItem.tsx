import { Grid, Typography, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

const PREFIX = "FactItem";
const classes = {
    root: `${PREFIX}-root`,
    details: `${PREFIX}-details`,
};
const Root = styled("div")(() => ({
    [`&.${classes.root}`]: {
        marginBottom: "3rem",
        "& .icon": {
            fontSize: "3.6rem",
            color: "var(--light-gray-text)",
            float: "left",
        },
    },
    [`& .${classes.details}`]: {
        marginLeft: "6rem",
        "& .number": {
            fontSize: "3rem",
        },
    },
}));

type Props = {
    icon: string;
    name: string;
    count: number;
};
const FactItem = ({ icon, name, count }: Props) => {
    const countUpRef = useRef<HTMLElement>(null);

    const { start } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: count,
        duration: 1,
    });

    useEffect(() => {
        const countUp = countUpRef.current;
        if (!countUp) return;
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(countUp);
                    observer.disconnect();
                    start();
                }
            });
        };
        const observer = new IntersectionObserver(callback);
        observer.observe(countUp);
    }, [start]);

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Root className={classes.root}>
                <span className={`icon ${icon}`}></span>
                <div className={classes.details}>
                    <Typography variant="h3" className="mb-0 mt-0 number">
                        <em ref={countUpRef} className="count" />
                    </Typography>
                    <p className="mb-0">{name}</p>
                </div>
            </Root>
        </Grid>
    );
};

export default FactItem;
