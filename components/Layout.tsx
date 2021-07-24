import { AppBar, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createStyles } from "@material-ui/styles";
import Logo from "assets/images/logos/logo-192x192.png";
import clsx from "clsx";
import config from "config/site";
import Head from "next/head";
import NextImage from "next/image";
import React, { ReactNode, useState } from "react";
import HambugerMenu from "./HambugerMenu";

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1rem",
        },
        content: {
            padding: "0 1rem",
        },
        menuListItem: {
            marginTop: 55,
        },
    }),
);

export type PageMeta = {
    title: string;
    description?: string;
    image?: string;
    type?: "article";
};

type Props = {
    children?: ReactNode;
    meta: PageMeta;
};

const tabs = [
    {
        label: "Home",
        width: `${85 / 10.2}%`,
        path: "/",
    },
    {
        label: "Tools",
        width: `${218 / 10.2}%`,
        path: "/tools",
    },
    {
        label: "Blog",
        width: `${264 / 10.2}%`,
        path: "blog",
    },
    {
        label: "CV",
        width: `${204 / 10.2}%`,
        path: "https://cv.xn--t-lia.vn/",
    },
    {
        label: "TĐ.VN",
        width: `${248 / 10.2}%`,
        path: "https://xn--t-lia.vn/",
    },
];

const Layout = ({ children, meta: { title, description = "", image = "", type = "article" } }: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isPc = useMediaQuery(theme.breakpoints.up("md"));
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

    return (
        <>
            <Head>
                <title>{`${title} - ${config.siteTitle}`}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
                <meta property="og:description" content={description} />
                <meta name="image" content={image} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content={type} />
            </Head>
            <AppBar elevation={0} color="default" position="static" className={clsx(classes.header, isPc ? "pc" : "")}>
                <NextImage className="logo border-radius" width={32} height={32} src={Logo} alt="TĐ.VN" />
                <h1 className="ml-1 text-nowrap">{title}</h1>
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
                                onClick={toggleDrawer(false)}
                                button
                                key={item.path}
                                component={"a"}
                                href={item.path}
                            >
                                {item.label}
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </AppBar>
            <div className="p-2">{children}</div>
        </>
    );
};

export default Layout;
