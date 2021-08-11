import { Typography } from "@material-ui/core";
import BlogItem from "./BlogItem";

/* eslint-disable @next/next/no-img-element */
export const SectionBlog = () => {
    return (
        <section id="blog">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Latest Posts
                </Typography>
                <div className="row blog-wrapper">
                    <BlogItem
                        category="Reviews"
                        title="5 Best App Development Tool for Your Project"
                        href="#"
                        thumbnail="images\cv\blog\1.svg"
                        createDay="09 February, 2020"
                        author="DoLT"
                    />
                    <BlogItem
                        category="Tutorial"
                        title="Common Misconceptions About Payment"
                        href="#"
                        thumbnail="images\cv\blog\2.svg"
                        createDay="09 February, 2020"
                        author="DoLT"
                    />
                    <BlogItem
                        category="Business"
                        title="3 Things To Know About Startup Business"
                        href="#"
                        thumbnail="images\cv\blog\3.svg"
                        createDay="09 February, 2020"
                        author="DoLT"
                    />
                </div>
            </div>
        </section>
    );
};
