/* eslint-disable @next/next/no-img-element */
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";
import FactItem from "./FactItem";
import SkillItem from "./SkillItem";

export const SectionAbout = () => {
    return (
        <section id="about">
            <Container>
                <Typography variant="h2" className="section-title wow fadeInUp">
                    About Me
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <div className="text-center mb-5">
                            <img src="images\cv\avatar-2.svg" alt="TĐ" />
                        </div>
                    </Grid>
                    <Grid container item xs={12} md={9}>
                        <Grid container item spacing={4} className="rounded bg-white shadow-dark p-4 m-0">
                            <Grid item xs={12} sm={6}>
                                <p>
                                    I am Le Trung Do, Fullstack developer from Ho Chi Minh, Viet Nam. I have rich
                                    experience in Web app & mobile app, also I am good at ReactJs, NextJs, Xamarin
                                    Forms.
                                </p>
                                <Button
                                    href="https://i.topcv.vn/letrungdo?ref=1893460"
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="contained"
                                    color="primary"
                                    className="mt-3 mb-5 btn-radius"
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
            </Container>
        </section>
    );
};
