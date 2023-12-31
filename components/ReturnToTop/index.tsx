import { debounce, styled } from "@mui/material";
import { useEffect, useRef } from "react";

const PREFIX = "ReturnToTop";
const classes = {
    root: `${PREFIX}-root`,
};
const Root = styled("div")(() => ({
    [`&.${classes.root}`]: {
        position: "fixed",
        bottom: 25,
        right: 25,
        background: "rgba(0, 0, 0, 0.2)",
        width: 40,
        height: 40,
        borderRadius: "100%",
        zIndex: 4,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        "& i": {
            color: "var(--primary-text)",
            margin: 0,
            position: "relative",
            left: 12.5,
            top: 9,
            fontSize: 15,
            fontWeight: "bold",
            transform: "translateY(0px)",
            transition: "all 0.1s ease-in-out",
        },
        "&:active": {
            opacity: "50%",
        },
    },
}));

const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
const thresholdTop = 500;
const ReturnToTop = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    const showOrHideBackToTopButton = () => {
        const rootElm = rootRef.current;
        if (!rootElm) return;
        if (document.body.scrollTop > thresholdTop || document.documentElement.scrollTop > thresholdTop) {
            rootElm.style.display = "block";
        } else {
            rootElm.style.display = "none";
        }
    };

    useEffect(() => {
        const onScroll = debounce(() => {
            showOrHideBackToTopButton();
        }, 300);
        showOrHideBackToTopButton();
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <Root className={classes.root} ref={rootRef} onClick={handleClick}>
            <i className="icon-arrow-up" />
        </Root>
    );
};

export default ReturnToTop;
