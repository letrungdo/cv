import config from "config/site";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

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

const Layout = ({ children, meta: { title, description = "", image = "", type = "article" } }: Props) => (
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
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{" "}
                |{" "}
                <Link href="/download-osmosis-notes">
                    <a>Download Osmosis.org Notes</a>
                </Link>
            </nav>
        </header>
        {children}
    </>
);

export default Layout;
