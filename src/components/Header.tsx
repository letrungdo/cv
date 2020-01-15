import React, { Component } from "react";
import { MainInfo } from "../Models/MainInfo";
import { SmoothScroll } from "../utils/SmoothScroll";
import { withTranslation, WithTranslation } from "react-i18next";

interface Props extends WithTranslation {
    data: MainInfo;
}

class Header extends Component<Props> {
    render() {
        const { t, i18n } = this.props;
        if (!this.props.data) return "";
        const { occupation, description } = this.props.data;
        const city = this.props.data.address.city;
        const networks = this.props.data.social.map(function(network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });

        return (
            <header id="home">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="/">
                        <img src="/logo192.png" width="30" height="30" alt="Le Trung Do CV logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <div className="nav-link" onClick={() => SmoothScroll.scrollTo("home")}>
                                    Home <span className="sr-only">(current)</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => SmoothScroll.scrollTo("about")}>
                                    About
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => SmoothScroll.scrollTo("resume")}>
                                    Resume
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => SmoothScroll.scrollTo("portfolio")}>
                                    Portfolio
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => SmoothScroll.scrollTo("contact")}>
                                    Contact
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {i18n.language}
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg-right">
                            <button className="dropdown-item" type="button" onClick={() => i18n.changeLanguage("vi")}>
                                Vietnamese
                            </button>
                            <button className="dropdown-item" type="button" onClick={() => i18n.changeLanguage("en")}>
                                English
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {t("main:name")}.</h1>
                        <h3>
                            I'm a {city} based <span>{occupation}</span>. {description}.
                        </h3>
                        <hr />
                        <ul className="social">{networks}</ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default withTranslation("main")(Header);
