import { AppBar, Link, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createStyles } from "@material-ui/styles";
import Logo from "assets/images/logos/logo-192x192.png";
import config from "config/site";
import Head from "next/head";
import NextImage from "next/image";
import React, { ReactNode, useState } from "react";
import { onClickLink } from "utils";
import HambugerMenu from "./HambugerMenu";

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1rem",
            boxShadow: "inset 0 -1px 0 0 #fff, 0 1px 5px rgb(0 0 0 / 10%)",
            [theme.breakpoints.up("md")]: {
                padding: "1rem 5rem",
            },
            [theme.breakpoints.up("lg")]: {
                padding: "1rem 15rem",
            },
            [theme.breakpoints.up("xl")]: {
                padding: "1rem 20rem",
            },
        },
        content: {
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
        },
        menuListItem: {
            marginTop: 55,
        },
        menuPc: {
            marginLeft: "auto",
            display: "flex",
            gap: 20,
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
        path: "/",
    },
    {
        label: "Tools",
        path: "/tools",
    },
    {
        label: "Blog",
        path: "blog",
    },
    {
        label: "CV",
        path: "https://cv.xn--t-lia.vn/",
    },
    {
        label: "TĐ.VN",
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

    const onClickLinkMobile = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        toggleDrawer(false)(ev);
        onClickLink(ev);
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
            <AppBar elevation={0} color="transparent" position="static" className={classes.header}>
                <NextImage className="logo border-radius" width={32} height={32} src={Logo} alt="TĐ.VN" />
                <h1 className="ml-1 text-nowrap">{title}</h1>
                {isPc ? (
                    <div className={classes.menuPc}>
                        {tabs.map((tab) => (
                            <Link key={tab.path} href={tab.path} onClick={onClickLink}>
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </AppBar>
            <div className={classes.content}>{children}</div>
        </>
    );
};

export default Layout;
