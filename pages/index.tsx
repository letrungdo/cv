import { makeStyles } from "@material-ui/core";
import SlideMenu, { drawerWidth } from "components/SlideMenu";
import { cvConfig } from "config/cv";
import config from "config/site";
import { FbProfileRes } from "interfaces/response";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import api from "services/api";
import { EnvConfig } from "services/envConfig";

const SectionContact = dynamic(import("components/Section/Contact"));
const SectionBlog = dynamic(import("components/Section/Blog"));
const SectionAbout = dynamic(import("components/Section/About"));
const SectionExperience = dynamic(import("components/Section/Experience"));
const SectionServices = dynamic(import("components/Section/Services"));
const SectionWorks = dynamic(import("components/Section/Works"));
const SectionHome = dynamic(import("components/Section/Home"));
const ReturnToTop = dynamic(import("components/ReturnToTop"), { ssr: false });

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        [theme.breakpoints.up("md")]: {
            marginLeft: drawerWidth,
        },
    },
}));

export const FbContext = React.createContext("");

const CV = () => {
    const classes = useStyles();
    const [profileUrl, setProfileUrl] = useState("");

    useEffect(() => {
        import("scrollreveal").then((m) => {
            window.ScrollReveal = m.default;
            window.ScrollReveal().reveal(".sanim", {
                delay: 200,
                distance: "30px",
                origin: "bottom",
                duration: 1000,
                interval: 50,
            });
        });

        api.get<FbProfileRes>("/api/fb/profile", { params: { userID: EnvConfig.fbUserID } }).then((res) => {
            setProfileUrl(res.profileUrl || "");
        });
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
                <meta property="og:image" content="/images/cv-thumbnail.jpg" />
                <meta name="image" content="images/cv-thumbnail.jpg" />
                <meta name="author" content={cvConfig.name} />
            </Head>
            <SlideMenu />
            <main className={classes.content}>
                <FbContext.Provider value={profileUrl}>
                    <SectionHome />
                    <SectionAbout />
                </FbContext.Provider>
                <SectionServices />
                <SectionExperience />
                <SectionWorks />
                <SectionBlog />
                <SectionContact />
            </main>
            <ReturnToTop />
        </>
    );
};

export default CV;
