/* eslint-disable @next/next/no-img-element */
import { Container, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";

const useStyles = makeStyles(() =>
    createStyles({
        serviceBox: {
            transform: "translateY(0)",
            transition: "all 0.3s ease-in-out",
            borderRadius: 20,
            "& h3": {
                fontSize: "2rem",
            },
            "&:hover": {
                transform: "translateY(-10px)",
            },
        },
    }),
);
type ServiceBoxProps = {
    className: string;
    imgSrc: string;
    name: string;
    description: string;
    bgColor: string;
};
const ServiceBox = ({ className = "", name, description, imgSrc, bgColor }: ServiceBoxProps) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className={`${classes.serviceBox} p-6 text-center ${className}`} style={{ backgroundColor: bgColor }}>
                <img className="mb-4" src={imgSrc} alt={description} />
                <Typography variant="h3" className="mb-3 mt-0">
                    {name}
                </Typography>
                <p className="mb-0">{description}</p>
            </div>
        </Grid>
    );
};

export const SectionServices = () => {
    return (
        <section id="services">
            <Container>
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Services
                </Typography>
                <Grid container spacing={3}>
                    {cvConfig.services.map((s) => (
                        <ServiceBox key={s.name} {...s} />
                    ))}
                </Grid>
                <div className="mt-5 text-center">
                    <p className="mb-0">
                        Looking for a custom job? <a href="#contact">Click here</a> to contact me! 👋
                    </p>
                </div>
            </Container>
        </section>
    );
};
