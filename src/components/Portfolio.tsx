import React, { Component } from "react";
import PortfolioInfo from "../Models/PortfolioInfo";

interface Props {
    data: PortfolioInfo;
}

class Portfolio extends Component<Props> {
    render() {
        if (!this.props.data) return "";
        const projects = this.props.data.projects.map(function(projects) {
            const projectImage = "images/portfolio/" + projects.image;
            return (
                <div key={projects.title} className="p-2 col-xs-12 col-md-4 portfolio-item">
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title} rel="noopener noreferrer" target="_blank">
                            <img alt={projects.title} src={projectImage} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <div className="row container-fluid">
                    <div className="col-12">
                        <h1>Check Out Some of My Works.</h1>
                        <div className="row">{projects}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
