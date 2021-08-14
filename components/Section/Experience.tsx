import { Grid, makeStyles, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";
import React from "react";

const useStyles = makeStyles({
    content: {
        position: "relative",
        "& .time": {
            color: "var(--light-gray-text)",
            fontSize: "1.4rem",
        },
        "& h3": {
            fontSize: "2rem",
            margin: "10px 0",
        },
        "& p": {
            whiteSpace: "pre-wrap",
        },
    },
    timeline: {
        position: "relative",
    },
    timelineItem: {
        paddingLeft: "5rem",
        marginBottom: "5rem",
        position: "relative",
        backgroundColor: "inherit",
        width: "100%",
        boxSizing: "border-box",
        "&:last-of-type": {
            marginBottom: 0,
            "& .line": {
                bottom: 0,
            },
        },
        "&.edu:after": {
            content: `""`,
            background: "var(--primary-bg)",
            fontFamily: "simple-line-icons",
            fontSize: 24,
            color: "var(--main-color)",
            position: "absolute",
            left: -7,
            top: 0,
            zIndex: 1,
        },
        "&.exp:after": {
            content: `""`,
            background: "var(--primary-bg)",
            fontFamily: "simple-line-icons",
            fontSize: 24,
            color: "var(--main-color)",
            position: "absolute",
            left: -7,
            top: 0,
            zIndex: 1,
        },
        "& .line": {
            position: "absolute",
            width: 1,
            backgroundColor: "var(--main-color)",
            top: "3.5rem",
            bottom: "-5rem",
            left: "0.4rem",
        },
    },
});

type TimelineProps = {
    time: string;
    title: string;
    description: string;
    animDelay?: number;
    className: string;
};
const Timeline = ({ time, title, description, className }: TimelineProps) => {
    const classes = useStyles();

    return (
        <div className={`${classes.timelineItem} sanim ${className}`}>
            <div className={classes.content}>
                <span className="time">{time}</span>
                <Typography variant="h3" className="title">
                    {title}
                </Typography>
                <p>{description}</p>
            </div>
            <span className="line" />
        </div>
    );
};

const SectionExperience = () => {
    const classes = useStyles();

    return (
        <section id="experience">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    Experience
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className={`${classes.timeline} bg-white rounded shadow-dark p-6 overflow-hidden`}>
                            {cvConfig.experience.education.map((t) => (
                                <Timeline className="edu" key={t.time} {...t} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={`${classes.timeline} bg-white rounded shadow-dark p-6 overflow-hidden`}>
                            {cvConfig.experience.work.map((t) => (
                                <Timeline className="exp" key={t.time} {...t} />
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default React.memo(SectionExperience);
