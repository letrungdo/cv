import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, makeStyles } from "@material-ui/core";
import AutoLink from "components/AutoLink";
import { mainPaddingStyle } from "components/Layout";
import React from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            ...mainPaddingStyle(theme),
            backgroundColor: "var(--main-bg)",
            color: "var(--primary-text)",
            textAlign: "center",
            flexShrink: 0,
        },
        link: {
            display: "inline-block",
            margin: "0 1rem",
            color: "var(--primary-text)",
        },
        copyright: {
            color: "var(--gray-text)",
            fontSize: "80%",
        },
    }),
);

type Props = {
    socials: {
        url: string;
        label: string;
        iconClassName: string;
    }[];
    links: {
        url: string;
        label: string;
    }[];
    copyright: string;
};

const Footer = ({ socials, links, copyright }: Props) => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <div className="m-2">
                {socials.map((social) => {
                    return (
                        <AutoLink className="ml-2 mr-2" href={social.url} key={social.label}>
                            <FontAwesomeIcon
                                icon={social.iconClassName.split(" ") as IconProp}
                                transform="grow-2"
                                style={{ color: "var(--primary-text)" }}
                            />
                        </AutoLink>
                    );
                })}
            </div>
            <div className="m-2">
                {links.map((link) => (
                    <AutoLink key={link.label} href={link.url} className={classes.link}>
                        {link.label}
                    </AutoLink>
                ))}
            </div>
            <p className={`${classes.copyright} m-2`}>{copyright}</p>
        </footer>
    );
};

export default Footer;
