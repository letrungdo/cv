import React, { Component } from "react";
import PortfolioInfo from "../Models/PortfolioInfo";
import { withTranslation, WithTranslation } from "react-i18next";

interface Props extends WithTranslation {}

class Portfolio extends Component<Props> {
    render() {
        const { t } = this.props;
        const data: PortfolioInfo[] = t("portfolio:projects", { returnObjects: true });

        if (!data) return "";
        const projects = data.map(function(project) {
            const projectImage = "images/portfolio/" + project.image;
            return (
                <div key={project.title} className="p-2 col-xs-12 col-md-4 portfolio-item">
                    <div className="item-wrap">
                        <a href={project.url} title={project.title} rel="noopener noreferrer" target="_blank">
                            <img alt={project.title} src={projectImage} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{project.title}</h5>
                                    <p>{project.category}</p>
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

export default withTranslation(["common", "portfolio"])(Portfolio);
