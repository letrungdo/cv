import { createStyles, Hidden, Link, List, ListItem, makeStyles, SwipeableDrawer, Theme } from "@material-ui/core";
import Logo from "assets/images/logos/logo-192x192.png";
import HambugerMenu from "components/HambugerMenu";
import { ROOT_ROUTE } from "constants/routePath";
import NextImage from "next/image";
import SingletonRouter from "next/router";
import React, { useState } from "react";
import { onClickLink } from "utils";

export const mainPaddingStyle = (theme: Theme) => ({
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
        padding: "1rem 5rem",
    },
    [theme.breakpoints.up("lg")]: {
        padding: "1rem 15rem",
    },
    [theme.breakpoints.up("xl")]: {
        padding: "1rem 20rem",
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "inset 0 -1px 0 0 #fff, 0 1px 5px rgb(0 0 0 / 10%)",
            ...mainPaddingStyle(theme),
        },
        menuListItem: {
            marginTop: 45,
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
    const onClickLinkMobile = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        toggleDrawer(false)(ev);
        onClickLink(ev);
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
                        <Link key={tab.path} href={tab.path} onClick={onClickLink}>
                            {tab.label}
                        </Link>
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
                    <List className={classes.menuListItem} onKeyDown={toggleDrawer(false)}>
                        {tabs.map((item) => (
                            <ListItem
                                onClick={onClickLinkMobile}
                                button
                                key={item.path}
                                component={"a"}
                                href={item.path}
                                target="_blank"
                            >
                                {item.label}
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Hidden>
        </header>
    );
};

export default React.memo(Header);
