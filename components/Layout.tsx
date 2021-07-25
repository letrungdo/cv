import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";
import config from "config/site";
import Head from "next/head";
import React, { ReactNode } from "react";
import Header, { mainPaddingStyle } from "./Header";

const useStyles = makeStyles((theme) =>
    createStyles({
        content: {
            ...mainPaddingStyle(theme),
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

const Layout = ({ children, meta: { title, description = "", image = "", type = "article" } }: Props) => {
    const classes = useStyles();

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
            <Header title={title} />
            <div className={classes.content}>{children}</div>
        </>
    );
};

export default Layout;
