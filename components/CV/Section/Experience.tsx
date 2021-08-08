import { Typography } from "@material-ui/core";

export const SectionExperience = () => {
    return (
        <section id="experience">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Experience
                </Typography>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                            <div className="timeline-container wow fadeInUp">
                                <div className="content">
                                    <span className="time">2019 - Present</span>
                                    <Typography variant="h3" className="title">
                                        Academic Degree
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div className="content">
                                    <span className="time">2017 - 2013</span>
                                    <Typography variant="h3" className="title">
                                        Bachelor’s Degree
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                <div className="content">
                                    <span className="time">2013 - 2009</span>
                                    <Typography variant="h3" className="title">
                                        Honours Degree
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden mt-5">
                            <div className="timeline-container wow fadeInUp">
                                <div className="content">
                                    <span className="time">2019 - Present</span>
                                    <Typography variant="h3" className="title">
                                        Web Designer
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                <div className="content">
                                    <span className="time">2017 - 2013</span>
                                    <Typography variant="h3" className="title">
                                        Front-End Developer
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                <div className="content">
                                    <span className="time">2013 - 2009</span>
                                    <Typography variant="h3" className="title">
                                        Back-End Developer
                                    </Typography>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
