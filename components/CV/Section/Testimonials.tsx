import { Typography } from "@material-ui/core";

/* eslint-disable @next/next/no-img-element */
export const SectionTestimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Clients & Reviews
                </Typography>
                <div className="testimonials-wrapper mt-5">
                    <div className="testimonial-item text-center mx-auto">
                        <div className="thumb mb-3 mx-auto">
                            <img src="images\cv\avatar-3.svg" alt="customer-name" />
                        </div>
                        <Typography variant="h4" className="mt-3 mb-0">
                            John Doe
                        </Typography>
                        <span className="subtitle">Product designer at Dribbble</span>
                        <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
                            <p className="mb-0">
                                I enjoy working with the theme and learn so much. You guys make the process fun and
                                interesting. Good luck! 👍
                            </p>
                        </div>
                    </div>

                    <div className="testimonial-item text-center mx-auto">
                        <div className="thumb mb-3 mx-auto">
                            <img src="images\cv\avatar-1.svg" alt="customer-name" />
                        </div>
                        <Typography variant="h4" className="mt-3 mb-0">
                            John Doe
                        </Typography>
                        <span className="subtitle">Product designer at Dribbble</span>
                        <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
                            <p className="mb-0">
                                I enjoy working with the theme and learn so much. You guys make the process fun and
                                interesting. Good luck! 🔥
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-1.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-2.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-3.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-4.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-5.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-6.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-7.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="client-item">
                            <div className="inner">
                                <img src="images\cv\client-8.svg" alt="client-name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
