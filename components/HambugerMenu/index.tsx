import { styled } from "@mui/material";
import clsx from "clsx";

interface Props {
    onClick?: () => void;
    isOpen: boolean;
    className?: string;
}
const PREFIX = "HambugerMenu";
const classes = {
    root: `${PREFIX}-root`,
};
const Root = styled("div")(() => ({
    [`&.${classes.root}`]: {
        position: "fixed",
        right: "1rem",
        top: "1rem",
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
}));

const HambugerMenu = ({ onClick, isOpen, className }: Props) => {
    return (
        <Root aria-label="hambuger-menu" className={clsx(classes.root, "cursor-pointer", className)} onClick={onClick}>
            <div className={clsx("hambuger-menu-icon", isOpen ? "change" : "")}>
                <div className={`bar1`} />
                <div className={`bar2`} />
                <div className={`bar3`} />
            </div>
        </Root>
    );
};

export default HambugerMenu;
