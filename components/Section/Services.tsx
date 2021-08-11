import { Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";

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
                <img src={imgSrc} alt={description} />
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
                    {cvConfig.services.map((s) => (
                        <ServiceBox key={s.name} {...s} />
                    ))}
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
