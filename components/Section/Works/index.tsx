import { Button, Typography } from "@material-ui/core";
import { cvConfig } from "config/cv";
import WorkItem from "./WorkItem";

export const SectionWorks = () => {
    return (
        <section id="works">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Recent works
                </Typography>
                <ul className="portfolio-filter list-inline wow fadeInUp">
                    <li className="current list-inline-item" data-filter="*">
                        Everything
                    </li>
                    <li className="list-inline-item" data-filter=".creative">
                        Creative
                    </li>
                    <li className="list-inline-item" data-filter=".art">
                        Art
                    </li>
                    <li className="list-inline-item" data-filter=".design">
                        Design
                    </li>
                    <li className="list-inline-item" data-filter=".branding">
                        Branding
                    </li>
                </ul>
                <div className="pf-filter-wrapper">
                    <select className="portfolio-filter-mobile">
                        <option value="*">Everything</option>
                        <option value=".creative">Creative</option>
                        <option value=".art">Art</option>
                        <option value=".design">Design</option>
                        <option value=".branding">Branding</option>
                    </select>
                </div>
                <div className="row portfolio-wrapper">
                    {cvConfig.works.map((w) => (
                        <WorkItem key={w.href} {...w} />
                    ))}
                </div>
                <div className="load-more text-center mt-4">
                    <Button variant="contained" color="primary" className="btn-radius">
                        <i className="fas fa-spinner"></i> Load more
                    </Button>
                    <ul className="portfolio-pagination list-inline d-none">
                        <li className="list-inline-item">1</li>
                        <li className="list-inline-item">
                            <a href="works-2.html">2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
