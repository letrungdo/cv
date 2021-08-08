import { Typography } from "@material-ui/core";

/* eslint-disable @next/next/no-img-element */
export const SectionPrices = () => {
    return (
        <section id="prices">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeIn">
                    Pricing Plans
                </Typography>
                <div className="row mt-5">
                    <div className="col-md-4 pr-md-0 mt-md-4 mt-0">
                        <div className="price-item bg-white rounded shadow-dark text-center">
                            <img src="images\cv\price-1.svg" alt="Regular" />
                            <Typography variant="h2" className="plan">
                                Basic
                            </Typography>
                            <p>A Simple option but powerful to manage your business</p>
                            <p>Email support</p>
                            <Typography variant="h3" className="price">
                                <em>$</em>9<span>Month</span>
                            </Typography>
                            <a href="#" className="btn btn-default">
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 px-md-0 my-4 my-md-0">
                        <div className="price-item bg-white rounded shadow-dark text-center best">
                            <span className="badge">Recommended</span>
                            <img src="images\cv\price-2.svg" alt="Premium" />
                            <Typography variant="h2" className="plan">
                                Premium
                            </Typography>
                            <p>Unlimited product including apps integrations and more features</p>
                            <p>Mon-Fri support</p>
                            <Typography variant="h3" className="price">
                                <em>$</em>49<span>Month</span>
                            </Typography>
                            <a href="#" className="btn btn-default">
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 pl-md-0 mt-md-4 mt-0">
                        <div className="price-item bg-white rounded shadow-dark text-center">
                            <img src="images\cv\price-3.svg" alt="Ultimate" />
                            <Typography variant="h2" className="plan">
                                Ultimate
                            </Typography>
                            <p>A wise option for large companies and individuals</p>
                            <p>24/7 support</p>
                            <Typography variant="h3" className="price">
                                <em>$</em>99<span>Month</span>
                            </Typography>
                            <a href="#" className="btn btn-default">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
