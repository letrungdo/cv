/* eslint-disable @next/next/no-img-element */
import { createStyles, Hidden, List, ListItem, makeStyles, SwipeableDrawer } from "@material-ui/core";
import Logo from "assets/images/logos/logo-192x192.png";
import HambugerMenu from "components/HambugerMenu";
import { cvConfig } from "config/cv";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(() =>
    createStyles({
        menuMobile: {
            marginTop: 45,
            "& .MuiListItem-root": {
                padding: 0,
            },
            "& .link": {
                padding: "1.5rem 1rem 1.5rem 3rem",
                fontWeight: 700,
                color: "#fff",
                "& i": {
                    color: "#FFD15C",
                    marginRight: "2rem",
                },
            },
            "& .link.active": {
                color: "#FFD15C",
            },
        },
        menuIc: {
            position: "fixed",
            right: "1rem",
            top: "1rem",
        },
    }),
);

const Header = () => {
    const classes = useStyles();
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState("");
    const [isOpenMenu, setOpenMenu] = useState(false);
    const onMenuClick = (open: boolean) => () => {
        setOpenMenu(open);
    };
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        onMenuClick(open)();
    };
    const onClickLinkMobile = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        toggleDrawer(false)(ev);
        onItemClick(ev);
    };
    const onItemClick = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = (ev.target as any).href;
        setCurrentPath(`#${href.split("#")[1]}`);
    };

    useEffect(() => {
        setCurrentPath(`#${router.asPath.split("#")[1]}`);
    }, [router.asPath]);

    return (
        <>
            <Hidden mdUp>
                <HambugerMenu className={classes.menuIc} isOpen={isOpenMenu} onClick={onMenuClick(!isOpenMenu)} />
                <SwipeableDrawer
                    id="slide-menu"
                    anchor="right"
                    open={isOpenMenu}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    disableSwipeToOpen
                >
                    <List className={classes.menuMobile} onKeyDown={toggleDrawer(false)}>
                        {cvConfig.menu.map((item) => (
                            <ListItem button key={item.href}>
                                <a
                                    onClick={onClickLinkMobile}
                                    className={`link width-full ${currentPath === item.href ? "active" : ""}`}
                                    href={item.href}
                                >
                                    <i className={item.className} />
                                    {item.label}
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Hidden>
            <header className="desktop-header-1 d-flex align-items-start flex-column">
                <div className="site-logo button">
                    <NextLink href="/" passHref>
                        <a>
                            <Image src={Logo} alt="DoLT" width={33} height={33} />
                        </a>
                    </NextLink>
                </div>
                <nav>
                    <ul className="vertical-menu scrollspy">
                        {cvConfig.menu.map((item) => (
                            <li key={item.href}>
                                <a
                                    onClick={onItemClick}
                                    href={item.href}
                                    className={currentPath === item.href ? "active" : ""}
                                >
                                    <i className={item.className} />
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="footer">
                    <span className="copyright">© 2021 TĐ.VN</span>
                </div>
            </header>
        </>
    );
};

export default Header;
