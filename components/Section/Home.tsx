import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, makeStyles, Typography } from "@material-ui/core";
import ImgSkeleton from "components/ImgSkeleton";
import { cvConfig } from "config/cv";
import config from "config/site";
import dynamic from "next/dynamic";
import { FbContext } from "pages";
import React, { useEffect, useRef } from "react";

const ReactTypingEffect = dynamic(import("react-typing-effect"));

const useStyles = makeStyles({
    root: {
        background: "var(--main-bg)",
        padding: 0,
        height: "100vh",
        minHeight: "100vh",
    },
    intro: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        width: "100%",
        "& h1": {
            color: "var(--primary-text)",
            fontSize: 36,
        },
        "& span": {
            color: "var(--primary-text)",
            fontSize: 16,
        },
    },
    socialIcons: {
        "& a": {
            color: "var(--primary-text)",
            fontSize: 21,
            "&:hover": {
                color: "var(--active-text)",
            },
        },
        "& li:not(:last-child)": {
            marginRight: "2rem",
        },
    },
    parallax: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        "& .layer": {
            position: "absolute",
        },
        "& .p1": {
            left: "10%",
            top: "10%",
        },
        "& .p2": {
            left: "25%",
            top: "30%",
        },
        "& .p3": {
            left: "15%",
            bottom: "30%",
        },
        "& .p4": {
            left: "10%",
            bottom: "10%",
        },
        "& .p5": {
            left: "45%",
            top: "10%",
        },
        "& .p6": {
            left: "40%",
            bottom: "10%",
        },
        "& .p7": {
            top: "20%",
            right: "30%",
        },
        "& .p8": {
            right: "30%",
            bottom: "20%",
        },
        "& .p9": {
            right: "10%",
            top: "10%",
        },
        "& .p10": {
            top: "45%",
            right: "20%",
        },
        "& .p11": {
            bottom: "10%",
            right: "10%",
        },
    },
    scrollDown: {
        position: "absolute",
        bottom: 40,
        left: 0,
        width: "100%",
        zIndex: 1,
    },
    "@keyframes aniMouse": {
        "0%": {
            top: "29%",
        },
        "15%": {
            top: "50%",
        },
        "50%": {
            top: "50%",
        },
        "100%": {
            top: "29%",
        },
    },
    mouseWrapper: {
        color: "var(--primary-text)",
        fontSize: 14,
        display: "block",
        maxWidth: 100,
        margin: "auto",
        textAlign: "center",
        "&:hover": {
            color: "var(--primary-text)",
        },
        "& .mouse": {
            border: "solid 2px var(--primary-border)",
            borderRadius: 16,
            boxSizing: "border-box",
            display: "block",
            margin: "auto",
            marginTop: 10,
            height: 26,
            position: "relative",
            width: 20,
            "& .wheel": {
                background: "var(--primary-border)",
                borderRadius: "100%",
                display: "block",
                position: "absolute",
                top: 8,
                left: "50%",
                transform: "translateX(-50%)",
                height: 4,
                width: 4,
                animation: "$aniMouse 2s linear infinite",
            },
        },
    },
});

const scrollToBottom = () => {
    window.scroll({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
};

const SectionHome = () => {
    const parallaxRef = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let parallax: any | undefined;
        import("parallax-js").then((m) => {
            const Parallax = m.default;
            parallax = new Parallax(parallaxRef.current, {
                relativeInput: true,
                hoverOnly: true,
            });
        });

        return () => {
            parallax?.destroy();
        };
    }, []);

    return (
        <section id="home" className={`${classes.root} home flex align-items-center`}>
            <div className={classes.intro}>
                <FbContext.Consumer>
                    {(profileUrl) => (
                        <ImgSkeleton alt="avatar" src={profileUrl} className="circle" width={108} height={108} />
                    )}
                </FbContext.Consumer>
                <Typography variant="h1" className="mb-2">
                    {cvConfig.name}
                </Typography>
                <span>
                    {"I'm a "}
                    <ReactTypingEffect
                        text={cvConfig.mainJob}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={200}
                        eraseDelay={1500}
                    />
                </span>
                <ul className={`${classes.socialIcons} list-inline mb-0 mt-4`}>
                    {config.socialLinks.map((i) => (
                        <li key={i.label} className="list-inline-item">
                            <a href={i.url} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={i.iconClassName.split(" ") as IconProp} transform="grow-2" />
                            </a>
                        </li>
                    ))}
                </ul>
                <Button variant="contained" color="primary" className="mt-4 btn-radius" onClick={scrollToBottom}>
                    Hire me
                </Button>
            </div>
            <div className={classes.scrollDown}>
                <a href="#about" className={classes.mouseWrapper}>
                    <span>Scroll Down</span>
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </a>
            </div>
            <div ref={parallaxRef} className={classes.parallax}>
                <svg width="27" height="29" data-depth="0.3" className="layer p1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z"
                        fill="#FFD15C"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <svg width="26" height="26" data-depth="0.2" className="layer p2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z"
                        stroke="#FF4C60"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <svg width="30" height="25" data-depth="0.3" className="layer p3" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z"
                        fill="#44D7B6"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <svg width="15" height="23" data-depth="0.6" className="layer p4" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        transform="rotate(30 9.86603 10.13397)"
                        x="7"
                        width="3"
                        height="25"
                        rx="1.5"
                        fill="#FFD15C"
                        fillRule="evenodd"
                    ></rect>
                </svg>
                <svg width="15" height="23" data-depth="0.2" className="layer p5" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        transform="rotate(30 9.86603 10.13397)"
                        x="7"
                        width="3"
                        height="25"
                        rx="1.5"
                        fill="#6C6CE5"
                        fillRule="evenodd"
                    ></rect>
                </svg>
                <svg width="49" height="17" data-depth="0.5" className="layer p6" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FF4C60" fillRule="evenodd">
                        <path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"></path>
                        <path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"></path>
                    </g>
                </svg>
                <svg width="26" height="26" data-depth="0.4" className="layer p7" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z"
                        stroke="#FFD15C"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <svg width="19" height="21" data-depth="0.3" className="layer p8" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        transform="rotate(-40 6.25252 10.12626)"
                        x="7"
                        width="3"
                        height="25"
                        rx="1.5"
                        fill="#6C6CE5"
                        fillRule="evenodd"
                    ></rect>
                </svg>
                <svg width="30" height="25" data-depth="0.3" className="layer p9" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z"
                        fill="#6C6CE5"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <svg width="47" height="29" data-depth="0.2" className="layer p10" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#44D7B6" fillRule="evenodd">
                        <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"></path>
                        <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"></path>
                    </g>
                </svg>
                <svg width="33" height="20" data-depth="0.5" className="layer p11" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z"
                        fill="#FFD15C"
                        fillRule="evenodd"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default React.memo(SectionHome);
