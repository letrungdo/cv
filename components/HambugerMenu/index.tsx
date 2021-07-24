import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface Props {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
}
const useStyles = makeStyles<Theme, { isOpen: boolean }>(() =>
    createStyles({
        root: {
            zIndex: 1301,
            padding: 8,
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
                "& .bar1, & .bar2, & .bar3": {
                    width: 30,
                    backgroundColor: "#333333",
                },
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
    }),
);
const HambugerMenu = ({ onClick, isOpen }: Props) => {
    const classes = useStyles({ isOpen });

    return (
        <IconButton aria-label="hambuger-menu" className={classes.root} onClick={onClick}>
            <div className={clsx("hambuger-menu-icon", isOpen ? "change" : "")}>
                <div className={`bar1`} />
                <div className={`bar2`} />
                <div className={`bar3`} />
            </div>
        </IconButton>
    );
};

export default HambugerMenu;
