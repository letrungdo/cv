/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";
import FactItem from "./FactItem";
import SkillItem from "./SkillItem";

export const SectionAbout = () => {
    return (
        <section id="about">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    About Me
                </Typography>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center text-md-left mb-5">
                            <img src="images\cv\avatar-2.svg" alt="TĐ" />
                        </div>
                    </div>
                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark p-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        I am Le Trung Do, Fullstack developer from Ho Chi Minh, Viet Nam. I have rich
                                        experience in Web app & mobile app, also I am good at ReactJs, NextJs, Xamarin
                                        Forms.
                                    </p>
                                    <Button
                                        href="https://i.topcv.vn/letrungdo?ref=1893460"
                                        target="_blank"
                                        variant="contained"
                                        color="primary"
                                        className="mt-3 mb-5 btn-radius"
                                    >
                                        Download CV
                                    </Button>
                                </div>
                                <div className="col-md-6">
                                    {cvConfig.skills.map((item) => (
                                        <SkillItem key={item.name} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-10">
                    {cvConfig.facts.map((item) => (
                        <FactItem key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
