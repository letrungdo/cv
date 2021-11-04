import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import React from "react";

interface Props {
    onClick?: () => void;
    isOpen: boolean;
    className?: string;
}
const useStyles = makeStyles<Theme, { isOpen: boolean }>({
    root: {
        zIndex: 1301,
        padding: 4,
        display: "flex",
        marginLeft: "auto",
        "& .hambuger-menu-icon": {
            display: "inline-block",
            padding: "0 3px",
            "& .bar1, & .bar2, & .bar3": {
                width: 25,
                height: 2,
                backgroundColor: "var(--main-color)",
                margin: "6px 0",
                transition: "0.4s",
            },
            "& .bar2": {
                width: 19,
            },
        },
        "& .change": {
            margin: "0 0 0 -4px",
            "& .bar1": {
                transform: "rotate(-45deg) translate(-4px, 7px)",
            },
            "& .bar2": {
                opacity: 0,
            },
            "& .bar3": {
                transform: "rotate(45deg) translate(-4px, -7px)",
            },
        },
    },
});
const HambugerMenu = ({ onClick, isOpen, className }: Props) => {
    const classes = useStyles({ isOpen });

    return (
        <div aria-label="hambuger-menu" className={clsx(classes.root, "cursor-pointer", className)} onClick={onClick}>
            <div className={clsx("hambuger-menu-icon", isOpen ? "change" : "")}>
                <div className={`bar1`} />
                <div className={`bar2`} />
                <div className={`bar3`} />
            </div>
        </div>
    );
};

export default HambugerMenu;
