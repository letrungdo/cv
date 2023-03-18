import { Grid, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { cvConfig } from "config/cv";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles<Theme, { bgColor: string }>({
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
        backgroundColor: ({ bgColor }) => bgColor,
        boxShadow: ({ bgColor }) => `0px 5px 20px 0px ${bgColor}80`,
    },
});
type ServiceBoxProps = {
    className: string;
    imgSrc: string;
    name: string;
    description: string;
    bgColor: string;
};
const ServiceBox = ({ className = "", name, description, imgSrc, bgColor }: ServiceBoxProps) => {
    const classes = useStyles({ bgColor });

    return (
        <Grid item xs={12} sm={6} md={4} className="sanim">
            <div className={`${classes.serviceBox} p-6 text-center ${className}`}>
                <Image
                    src={imgSrc}
                    alt={description}
                    width={80}
                    height={80}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
                <Typography variant="h3" className="mb-3">
                    {name}
                </Typography>
                <p className="mb-0">{description}</p>
            </div>
        </Grid>
    );
};

const SectionServices = () => {
    return (
        <section id="services">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
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
            </div>
        </section>
    );
};

export default React.memo(SectionServices);
