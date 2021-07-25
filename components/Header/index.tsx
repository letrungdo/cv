import { createStyles, Hidden, List, ListItem, makeStyles, SwipeableDrawer } from "@material-ui/core";
import Logo from "assets/images/logos/logo-192x192.png";
import AutoLink from "components/AutoLink";
import HambugerMenu from "components/HambugerMenu";
import { mainPaddingStyle } from "components/Layout";
import { ROOT_ROUTE } from "constants/routePath";
import NextImage from "next/image";
import SingletonRouter from "next/router";
import React, { useState } from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "inset 0 -1px 0 0 #fff, 0 1px 5px rgb(0 0 0 / 10%)",
            ...mainPaddingStyle(theme),
        },
        menuMobile: {
            marginTop: 45,
            "& .MuiListItem-root": {
                padding: 0,
            },
            "& .link": {
                padding: "1rem 1.6rem",
            },
        },
        menuPc: {
            marginLeft: "auto",
            display: "flex",
            gap: 20,
        },
    }),
);

const tabs = [
    {
        label: "CV",
        path: "https://cv.xn--t-lia.vn/",
    },
    {
        label: "TĐ.VN",
        path: "https://xn--t-lia.vn/",
    },
];

type Props = {
    title: string;
};

const onClickLogo = () => {
    SingletonRouter.push(ROOT_ROUTE);
};

const Header = ({ title }: Props) => {
    const classes = useStyles();
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
    const onClickLinkMobile = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        toggleDrawer(false)(ev);
    };

    return (
        <header className={classes.header}>
            <NextImage
                className="logo border-radius cursor-pointer"
                width={32}
                height={32}
                src={Logo}
                alt="TĐ.VN"
                onClick={onClickLogo}
            />
            <h1 className="ml-1 text-nowrap">{title}</h1>
            <Hidden only={["xs", "sm"]}>
                <div className={classes.menuPc}>
                    {tabs.map((tab) => (
                        <AutoLink key={tab.path} href={tab.path}>
                            {tab.label}
                        </AutoLink>
                    ))}
                </div>
            </Hidden>
            <Hidden mdUp>
                <HambugerMenu isOpen={isOpenMenu} onClick={onMenuClick(!isOpenMenu)} />
                <SwipeableDrawer
                    id="slide-menu"
                    anchor="right"
                    open={isOpenMenu}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    disableSwipeToOpen
                >
                    <List className={classes.menuMobile} onKeyDown={toggleDrawer(false)}>
                        {tabs.map((item) => (
                            <ListItem onClick={onClickLinkMobile} button key={item.path}>
                                <AutoLink className="link width-full" href={item.path}>
                                    {item.label}
                                </AutoLink>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Hidden>
        </header>
    );
};

export default React.memo(Header);
