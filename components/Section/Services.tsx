import { Typography } from "@material-ui/core";

/* eslint-disable @next/next/no-img-element */
type ServiceBoxProps = {
    className: string;
    imgSrc: string;
    name: string;
    description: string;
    bgColor: string;
};
const ServiceBox = ({ className = "", name, description, imgSrc, bgColor }: ServiceBoxProps) => {
    return (
        <div className="col-md-4">
            <div
                className={`service-box rounded data-background p-6 text-center mb-5 ${className}`}
                style={{ backgroundColor: bgColor }}
            >
                <img src={imgSrc} alt="UI/UX design" />
                <Typography variant="h3" className="mb-3 mt-0">
                    {name}
                </Typography>
                <p className="mb-0">{description}</p>
            </div>
        </div>
    );
};

export const SectionServices = () => {
    return (
        <section id="services">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Services
                </Typography>
                <div className="row">
                    <ServiceBox
                        className="shadow-blue text-light"
                        imgSrc="images\cv\service-1.svg"
                        bgColor="#6C6CE5"
                        name="UI/UX design"
                        description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
                    />
                    <ServiceBox
                        className="shadow-yellow"
                        imgSrc="images\cv\service-2.svg"
                        bgColor="#F9D74C"
                        name="Web Development"
                        description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
                    />
                    <ServiceBox
                        className="shadow-pink text-light"
                        imgSrc="images\cv\service-3.svg"
                        bgColor="#F97B8B"
                        name="Photography"
                        description="Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
                    />
                </div>
                <div className="mt-5 text-center">
                    <p className="mb-0">
                        Looking for a custom job? <a href="#contact">Click here</a> to contact me! 👋
                    </p>
                </div>
            </div>
        </section>
    );
};
