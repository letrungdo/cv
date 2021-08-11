/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import { logDev } from "utils/logs";
import BlogItem from "./BlogItem";

type RSS = {
    [key: string]: any;
} & Parser.Output<{
    [key: string]: any;
}>;
const CORS_PROXY = process.env.NODE_ENV === "development" ? "https://cors-anywhere.herokuapp.com/" : "";

export const SectionBlog = () => {
    const [rssItems, setRssItems] = useState<RSS>({} as RSS);
    useEffect(() => {
        (async () => {
            // dynamic import
            const Parser = (await import("rss-parser")).default;
            const parser = new Parser();
            const feed = await parser.parseURL(`${CORS_PROXY}https://xn--t-lia.vn/rss.xml`);
            setRssItems(feed);
            logDev(feed);
        })();
    }, []);

    return (
        <section id="blog">
            <div className="container">
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Latest Posts
                </Typography>
                <div className="row blog-wrapper">
                    {rssItems?.items?.slice(0, 3)?.map((i) => (
                        <BlogItem
                            key={i.guid}
                            category={i.categories?.[0]}
                            title={i.title}
                            link={i.link}
                            thumbnail={rssItems?.image?.url}
                            pubDate={i.pubDate}
                            creator={i.creator}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
