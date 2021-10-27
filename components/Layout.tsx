import { makeStyles, Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";
import config from "config/site";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";

const useStyles = makeStyles((theme) =>
    createStyles({
        content: {
            ...mainPaddingStyle(theme),
            flex: "1 0 auto",
        },
    })
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

const Layout = ({ children, meta: { title, description = "", image = "", type = "article" } }: Props) => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{`${title} - ${config.siteTitle}`}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width" />
                <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
                <meta property="og:description" content={description} />
                <meta name="image" content={image} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content={type} />
            </Head>
            <div className={classes.content}>{children}</div>
            <Footer socials={config.socialLinks} links={config.footerLinks} copyright={config.copyright} />
        </>
    );
};

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

export default Layout;
