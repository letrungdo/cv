import { Container, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            position: "relative",
            "& .time": {
                color: "#8B88B1",
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
            "& span.line": {
                position: "absolute",
                width: 1,
                backgroundColor: "#FF4C60",
                top: 30,
                bottom: 30,
                left: 34,
            },
        },
        timelineItem: {
            paddingLeft: "5rem",
            marginBottom: "5rem",
            position: "relative",
            backgroundColor: "inherit",
            width: "100%",
            "&:last-of-type": {
                marginBottom: 0,
            },
            "&.edu:after": {
                content: `""`,
                background: " #FFF",
                fontFamily: "simple-line-icons",
                fontSize: 24,
                color: "#FF4C60",
                position: "absolute",
                left: -7,
                top: 0,
                zIndex: 1,
            },
            "&.exp:after": {
                content: `""`,
                background: " #FFF",
                fontFamily: "simple-line-icons",
                fontSize: 24,
                color: "#FF4C60",
                position: "absolute",
                left: -7,
                top: 0,
                zIndex: 1,
            },
        },
    }),
);
type TimelineProps = {
    time: string;
    title: string;
    description: string;
    animDelay?: number;
    className: string;
};
const Timeline = ({ time, title, description, animDelay, className }: TimelineProps) => {
    const classes = useStyles();

    const prop = animDelay
        ? {
              "data-wow-delay": `${animDelay}s`,
          }
        : {};

    return (
        <div className={`${classes.timelineItem} ${className} wow fadeInUp`} {...prop}>
            <div className={classes.content}>
                <span className="time">{time}</span>
                <Typography variant="h3" className="title">
                    {title}
                </Typography>
                <p>{description}</p>
            </div>
        </div>
    );
};

export const SectionExperience = () => {
    const classes = useStyles();

    return (
        <section id="experience">
            <Container>
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Experience
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className={`${classes.timeline} bg-white rounded shadow-dark p-6 overflow-hidden`}>
                            {cvConfig.experience.education.map((t) => (
                                <Timeline className="edu" key={t.time} {...t} />
                            ))}
                            <span className="line" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={`${classes.timeline} bg-white rounded shadow-dark p-6 overflow-hidden`}>
                            {cvConfig.experience.work.map((t) => (
                                <Timeline className="exp" key={t.time} {...t} />
                            ))}
                            <span className="line" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
