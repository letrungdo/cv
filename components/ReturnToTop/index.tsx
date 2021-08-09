import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles<Theme, { display: string }>(() =>
    createStyles({
        root: {
            position: "fixed",
            bottom: 25,
            right: 25,
            background: "rgba(0, 0, 0, 0.2)",
            width: 40,
            height: 40,
            display: ({ display }) => display,
            textDecoration: "none",
            borderRadius: "100%",
            zIndex: 4,
            transition: "all 0.3s ease-in-out",
            "& svg": {
                color: "#fff",
                margin: 0,
                position: "relative",
                left: 13,
                top: 9,
                fontSize: 16,
                transform: "translateY(0px)",
                transition: "all 0.1s ease-in-out",
            },
            "&:hover": {
                background: "#FF4C60",
            },
        },
    }),
);

const ReturnToTop = () => {
    const [display, setDisplay] = useState<"block" | "none">("none");
    const classes = useStyles({ display });

    useEffect(() => {
        const onScroll = () => {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                if (display !== "block") {
                    setDisplay("block");
                }
            } else {
                if (display !== "none") {
                    setDisplay("none");
                }
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [display]);

    return (
        <a className={classes.root} href="#home">
            <FontAwesomeIcon icon={["fas", "arrow-up"]} />
        </a>
    );
};

export default ReturnToTop;
