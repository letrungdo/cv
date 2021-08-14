import { Button, debounce, Hidden, makeStyles, SwipeableDrawer, Theme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "assets/images/logo192.webp";
import clsx from "clsx";
import HambugerMenu from "components/HambugerMenu";
import { cvConfig } from "config/cv";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export const drawerWidth = "32rem";

const useStyles = makeStyles((theme) => ({
    logo: {
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
        [theme.breakpoints.up("md")]: {
            marginTop: "4rem",
        },
        marginLeft: "2.2rem",
        "& span": {
            fontWeight: 700,
            fontSize: "2rem",
            color: "var(--secondary-text)",
            marginLeft: "1rem",
        },
    },
    menu: {
        marginTop: "3rem",
        "& .MuiButtonBase-root": {
            justifyContent: "flex-start",
        },
        "& .link": {
            width: "100%",
            padding: "1.5rem 1rem 1.5rem 3rem",
            fontWeight: 700,
            color: "var(--secondary-text)",
            "& i": {
                color: "var(--active-text)",
                marginRight: "2rem",
            },
        },
        "& .link.active": {
            color: "var(--active-text)",
        },
    },
    menuIc: {
        position: "fixed",
        right: "1rem",
        top: "1rem",
    },
    footer: {
        margin: "auto 0 2rem 3rem",
        "& .copyright": {
            color: "var(--light-gray-text)",
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const onClickLogo = () => {
    window.open("https://xn--t-lia.vn");
};

const SlideMenu = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const isPc = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
    const classes = useStyles();
    const [currentPath, setCurrentPath] = useState("");
    const onMenuClick = useCallback(
        (open: boolean) => () => {
            setOpenMenu(open);
        },
        [],
    );
    const toggleDrawer = useCallback(
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            onMenuClick(open)();
        },
        [onMenuClick],
    );
    const onItemClick = useCallback(
        (href: string) => (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (!isPc) {
                toggleDrawer(false)(ev);
            }
            setCurrentPath(href);
            document.getElementById(href)?.scrollIntoView({
                behavior: "smooth",
            });
        },
        [isPc, toggleDrawer],
    );

    useEffect(() => {
        setOpenMenu(isPc);
    }, [isPc]);

    useEffect(() => {
        const sections = cvConfig.menu.map((item) => {
            return document.getElementById(item.href) as HTMLElement;
        });
        const onScroll = debounce(() => {
            if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
                setCurrentPath(cvConfig.menu[0].href);

                return;
            }
            for (let i = 1; i < sections.length; i++) {
                if (
                    sections[i]?.offsetTop - window.scrollY < window.innerHeight / 2.2 &&
                    sections[i + 1]?.offsetTop - window.scrollY >= window.innerHeight / 2
                ) {
                    setCurrentPath(cvConfig.menu[i].href);

                    return;
                }
            }
            if (window.scrollY >= sections[cvConfig.menu.length - 1]?.offsetTop - window.innerHeight / 2 - 300) {
                setCurrentPath(cvConfig.menu[cvConfig.menu.length - 1].href);

                return;
            }
        }, 50);
        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <Hidden mdUp>
                <HambugerMenu className={classes.menuIc} isOpen={isOpenMenu} onClick={onMenuClick(!isOpenMenu)} />
            </Hidden>
            <SwipeableDrawer
                id="slide-menu"
                variant={isPc ? "persistent" : undefined}
                anchor={isPc ? "left" : "right"}
                open={isOpenMenu}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen
                transitionDuration={isPc ? 0 : 300}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.logo}>
                    <Image
                        className="button border-radius"
                        width={32}
                        height={32}
                        src={Logo}
                        alt="TĐ.VN"
                        onClick={onClickLogo}
                    />
                    <span>DOLT CV</span>
                </div>
                <div className={classes.menu} onKeyDown={toggleDrawer(false)}>
                    {cvConfig.menu.map((item) => (
                        <Button
                            key={item.href}
                            className={clsx("link", currentPath === item.href ? "active" : "")}
                            onClick={onItemClick(item.href)}
                        >
                            <i className={item.className} />
                            {item.label}
                        </Button>
                    ))}
                </div>
                <div className={classes.footer}>
                    <span className="copyright">
                        © 2021{" "}
                        <a href="https://xn--t-lia.vn" target="_blank" rel="noreferrer">
                            TĐ.VN
                        </a>
                    </span>
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default SlideMenu;
