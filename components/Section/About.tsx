import { Button, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";
import { useRef, useState } from "react";
import { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";

/* eslint-disable @next/next/no-img-element */
type SkillProps = {
    name: string;
    value: number;
    bgColor: string;
};

const SkillItem = ({ name, value, bgColor }: SkillProps) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [run, setRun] = useState(false);
    const onEnter = () => {
        if (run) return;
        setRun(true);
        myRef.current?.setAttribute("style", `width:${value}%;background-color:${bgColor}`);
    };

    return (
        <div className="skill-item mb-4">
            <div className="skill-info clearfix">
                <Typography variant="h4" className="float-left mb-4 mt-0">
                    {name}
                </Typography>
                <span className="float-right">{value}%</span>
            </div>
            <div className="progress">
                <Waypoint onEnter={onEnter}>
                    <div
                        ref={myRef}
                        className="progress-bar data-background"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={value}
                        style={{ backgroundColor: bgColor }}
                    />
                </Waypoint>
            </div>
        </div>
    );
};

type FactProps = {
    icon: string;
    name: string;
    count: number;
};
const FactItem = ({ icon, name, count }: FactProps) => {
    const countUpRef = useRef(null);
    const [run, setRun] = useState(false);
    const { start } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: count,
        duration: 1,
    });
    const onEnter = () => {
        if (run) return;
        setRun(true);
        start();
    };

    return (
        <div className="col-md-3 col-sm-6">
            <div className="fact-item mb-5">
                <span className={`icon ${icon}`}></span>
                <div className="details">
                    <Typography variant="h3" className="mb-0 mt-0 number">
                        <Waypoint onEnter={onEnter}>
                            <em ref={countUpRef} className="count" />
                        </Waypoint>
                    </Typography>
                    <p className="mb-0">{name}</p>
                </div>
            </div>
        </div>
    );
};

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
                                        I am Le Trung Do, web developer from Ho Chi Minh, Viet Nam. I have rich
                                        experience in web site design and building and customization, also I am good at
                                        ReactJs, Nextjs.
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
