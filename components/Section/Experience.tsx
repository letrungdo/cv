import { createStyles, makeStyles, Typography } from "@material-ui/core";
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
    }),
);
type TimelineProps = {
    time: string;
    title: string;
    description: string;
    animDelay?: number;
};
const Timeline = ({ time, title, description, animDelay }: TimelineProps) => {
    const classes = useStyles();

    const prop = animDelay
        ? {
              "data-wow-delay": `${animDelay}s`,
          }
        : {};

    return (
        <div className="timeline-container wow fadeInUp" {...prop}>
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
    return (
        <section id="experience">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Experience
                </Typography>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="timeline edu bg-white rounded shadow-dark p-6 overflow-hidden">
                            {cvConfig.experience.education.map((t) => (
                                <Timeline key={t.time} {...t} />
                            ))}
                            <span className="line" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="timeline exp bg-white rounded shadow-dark p-6 overflow-hidden">
                            {cvConfig.experience.work.map((t) => (
                                <Timeline key={t.time} {...t} />
                            ))}
                            <span className="line" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
