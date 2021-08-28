import { Button, Grid, Typography } from "@material-ui/core";
import ImgSkeleton from "components/ImgSkeleton";
import { cvConfig } from "config/cv";
import { FbContext } from "pages";
import React from "react";
import FactItem from "./FactItem";
import SkillItem from "./SkillItem";

const onDownloadCV = () => {
    window.open(cvConfig.cvDownloadLink);
};

const SectionAbout = () => {
    return (
        <section id="about">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    About Me
                </Typography>
                <Grid container spacing={3}>
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
                    <Grid container item xs={12} md={9}>
                        <Grid container item spacing={4} className="rounded bg-white shadow-dark p-4 m-0">
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
