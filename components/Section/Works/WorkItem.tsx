/* eslint-disable @next/next/no-img-element */
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        portfolioItem: {
            position: "relative",
            overflow: "hidden",
            boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
            borderRadius: 20,
            "& .more-button": {
                color: "#FFF",
                fontSize: 20,
                display: "block",
                background: "#FFD15C",
                borderRadius: "100%",
                height: 40,
                lineHeight: "42px",
                textAlign: "center",
                position: "absolute",
                bottom: 20,
                left: 20,
                width: 40,
                opacity: 0,
                transition: "all 0.3s ease-in-out",
            },
            "&:hover": {
                "& .mask": {
                    opacity: 0.9,
                },
                "& h4, span": {
                    opacity: 1,
                    transform: "translateY(0)",
                },
                "& .more-button": {
                    opacity: 1,
                },
            },
        },
        details: {
            color: "#FFF",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 1,
            "& h4": {
                color: "#FFF",
                fontSize: 20,
                margin: "0 0 10px",
                padding: "0 20px",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
                position: "absolute",
                top: 60,
            },
            "& .term": {
                color: "#FFF",
                background: "#FF4C60",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                fontSize: 14,
                opacity: 0,
                display: "inline-block",
                padding: "3px 10px",
                position: "absolute",
                top: 0,
                left: 20,
                transform: "translateY(-40px)",
                transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
            },
        },
        thumb: {
            overflow: "hidden",
            "& .mask": {
                background: "#6C6CE5",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0,
                height: "100%",
                width: "100%",
                transition: "all 0.3s ease-in-out",
            },
        },
    }),
);

export enum MoreType {
    MagnifierAdd = "icon-magnifier-add",
    Options = "icon-options",
    Camrecorder = "icon-camrecorder",
    Music = "icon-music-tone-alt",
    Gallery = "icon-picture",
    Link = "icon-link",
}
type Props = {
    title: string;
    term: string;
    moreIcon: MoreType;
    thumbnail: string;
    href: string;
};

const WorkItem = ({ title, term, moreIcon, thumbnail, href }: Props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <a href={href} target="_blank" rel="noreferrer">
                <div className={`${classes.portfolioItem}`}>
                    <div className={classes.details}>
                        <span className="term">{term}</span>
                        <Typography variant="h4" className="title">
                            {title}
                        </Typography>
                        <span className="more-button">
                            <i className={moreIcon}></i>
                        </span>
                    </div>
                    <div className={classes.thumb}>
                        <img src={thumbnail} alt="Portfolio-title" />
                        <div className="mask" />
                    </div>
                </div>
            </a>
        </Grid>
    );
};

export default WorkItem;
