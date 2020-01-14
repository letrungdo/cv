import React, { Component } from "react";
import { MainInfo } from "../Models/MainInfo";
import { SmoothScroll } from "../utils/SmoothScroll";

interface Props {
    data: MainInfo;
}

class Footer extends Component<Props> {
    render() {
        if (!this.props.data) return "";
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
            <footer>
                <div className="row container-fluid">
                    <div className="col-12">
                        <ul className="social">{networks}</ul>
                        <ul className="copyright">
                            <li>&copy; Copyright {new Date().getFullYear()} </li>
                            <li>
                                Design by{" "}
                                <a title="Styleshout" href="https://xn--t-lia.vn">
                                    DoLT
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top" onClick={() => SmoothScroll.scrollTo("home")}>
                        <i className="fa fa-chevron-circle-up fa-3x"></i>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
