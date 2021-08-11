import { Button, Typography } from "@material-ui/core";

export const SectioContact = () => {
    return (
        <section id="contact">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Get In Touch
                </Typography>
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info">
                            <Typography variant="h3" className="wow fadeInUp">
                                {"Let's talk about everything!"}
                            </Typography>
                            <p className="wow fadeInUp">
                                {"Don't like forms? Send me an "}
                                <a href="mailto:letrdo@gmail.com">email</a>. 👋
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 mb-10">
                        <form id="contact-form" className="contact-form mt-6" method="post" action="form/contact.php">
                            <div className="messages"></div>
                            <div className="row">
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="InputName"
                                            id="InputName"
                                            placeholder="Your name"
                                            required
                                            data-error="Name is required."
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="InputEmail"
                                            name="InputEmail"
                                            placeholder="Email address"
                                            required
                                            data-error="Email is required."
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="column col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="InputSubject"
                                            name="InputSubject"
                                            placeholder="Subject"
                                            required
                                            data-error="Subject is required."
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="InputMessage"
                                            id="InputMessage"
                                            className="form-control"
                                            rows={5}
                                            placeholder="Message"
                                            required
                                            data-error="Message is required."
                                        ></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                id="submit"
                                variant="contained"
                                color="primary"
                                className="btn-radius"
                                value="Submit"
                                type="submit"
                                name="submit"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
