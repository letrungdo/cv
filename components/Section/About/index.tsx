import { Button, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import ImgSkeleton from "components/ImgSkeleton";
import { cvConfig } from "config/cv";
import { FbContext } from "pages";
import React from "react";
import FactItem from "./FactItem";
import SkillItem from "./SkillItem";

const onDownloadCV = () => {
    window.open(cvConfig.cvDownloadLink);
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        "& .MuiGrid-item": {
            padding: 12,
        },
        "& img": {
            height: "auto",
        },
    },
    content: {
        position: "relative",
        "&:before": {
            content: '""',
            width: 0,
            height: 0,
            position: "absolute",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid var(--primary-bg)",
            left: "50%",
            top: 2,
            transform: "translateX(-7.5px)",
            transition: "all 0.5s",
            [theme.breakpoints.up("md")]: {
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "15px solid var(--primary-bg)",
                left: -4,
                top: "20%",
            },
        },
        "& .MuiGrid-item": {
            padding: 16,
        },
    },
}));

const SectionAbout = () => {
    const classes = useStyles();

    return (
        <section id="about">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    About Me
                </Typography>
                <Grid container className={classes.wrapper}>
                    <Grid item xs={12} md={3} className="flex justify-content-center">
                        <FbContext.Consumer>
                            {(profileUrl) => (
                                <ImgSkeleton
                                    src={profileUrl}
                                    className="circle"
                                    alt="avatar"
                                    width={150}
                                    height={150}
                                />
                            )}
                        </FbContext.Consumer>
                    </Grid>
                    <Grid container item xs={12} md={9} className={classes.content}>
                        <Grid container item className="rounded bg-primary p-4 m-0">
                            <Grid item xs={12} sm={6}>
                                <p>{cvConfig.about}</p>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="mt-3 mb-5 btn-radius"
                                    onClick={onDownloadCV}
                                >
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {cvConfig.skills.map((item) => (
                                    <SkillItem key={item.name} {...item} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="mt-10">
                    {cvConfig.facts.map((item) => (
                        <FactItem key={item.name} {...item} />
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default React.memo(SectionAbout);
