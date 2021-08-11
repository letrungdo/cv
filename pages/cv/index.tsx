import { createStyles, Hidden, List, ListItem, makeStyles, SwipeableDrawer, Theme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import HambugerMenu from "components/HambugerMenu";
import ReturnToTop from "components/ReturnToTop";
import {
    SectioContact,
    SectionAbout,
    SectionBlog,
    SectionExperience,
    SectionHome,
    SectionServices,
    SectionWorks,
} from "components/Section";
import { cvConfig } from "config/cv";
import config from "config/site";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles<Theme, { drawerWidth: number }>((theme) =>
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
        footer: {
            margin: "auto 0 2rem 3rem",
            "& .copyright": {
                color: "#9C9AB3",
            },
        },
        drawer: {
            width: ({ drawerWidth }) => drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: ({ drawerWidth }) => drawerWidth,
        },
        content: {
            flexGrow: 1,
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: ({ drawerWidth }) => drawerWidth,
        },
    }),
);

const CV = () => {
    const isPc = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
    const classes = useStyles({ drawerWidth: isPc ? 300 : 240 });
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
    const onItemClick = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!isPc) {
            toggleDrawer(false)(ev);
        }
        const href = (ev.target as any).href;
        setCurrentPath(`#${href.split("#")[1]}`);
    };

    useEffect(() => {
        setOpenMenu(isPc);
    }, [isPc]);

    useEffect(() => {
        setCurrentPath(`#${router.asPath.split("#")[1]}`);
    }, [router.asPath]);

    useEffect(() => {
        document.body.setAttribute("style", "background-color:#353353");

        return () => {
            document.body.setAttribute("style", "");
        };
    }, []);

    return (
        <>
            <Head>
                <title>{`${cvConfig.title} - ${config.siteTitle}`}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={`${cvConfig.title} - ${config.siteTitle}`} />
                <meta property="og:description" content={cvConfig.description} />
                <meta property="og:type" content="article" />
                <meta name="image" content="images/cv/cv-thumbnail.png" />
                <meta property="og:image" content="images/cv/cv-thumbnail.png" />
            </Head>
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
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List className={classes.menuMobile} onKeyDown={toggleDrawer(false)}>
                    {cvConfig.menu.map((item) => (
                        <ListItem button key={item.href}>
                            <a
                                onClick={onItemClick}
                                className={`link width-full ${currentPath === item.href ? "active" : ""}`}
                                href={item.href}
                            >
                                <i className={item.className} />
                                {item.label}
                            </a>
                        </ListItem>
                    ))}
                </List>
                <div className={classes.footer}>
                    <span className="copyright">
                        © 2021{" "}
                        <a href="https://xn--t-lia.vn/" target="_blank" rel="noreferrer">
                            TĐ.VN
                        </a>
                    </span>
                </div>
            </SwipeableDrawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: isOpenMenu && isPc,
                })}
            >
                <SectionHome />
                <SectionAbout />
                <SectionServices />
                <SectionExperience />
                <SectionWorks />
                {/* <SectionPrices /> */}
                {/* <SectionTestimonials /> */}
                <SectionBlog />
                <SectioContact />
            </main>
            <ReturnToTop />
        </>
    );
};

export default CV;
