import React, { Component } from "react";
import { ResumeInfo } from "../Models/ResumeInfo";

interface Props {
    data: ResumeInfo;
}

class Resume extends Component<Props> {
    render() {
        if (!this.props.data) return "";
        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map(function(education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });
        const work = this.props.data.work.map(function(work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });
        const skills = this.props.data.skills.map(function(skills) {
            const className = "bar-expand " + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level }} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });

        return (
            <section id="resume" className="container-fluid">
                <div className="row education">
                    <div className="col-xs-12 col-md-3 header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-9 main-col">{education}</div>
                </div>

                <div className="row work">
                    <div className="col-xs-12 col-md-3 header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-9 main-col">{work}</div>
                </div>

                <div className="row skill">
                    <div className="col-xs-12 col-md-3 header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-9 main-col">
                        <p>{skillmessage}</p>
                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
