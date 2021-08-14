/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Grid, Typography } from "@material-ui/core";
import { DOMAIN_URL } from "constants/app";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import { logDev } from "utils/logs";
import BlogItem from "./BlogItem";

type RSS = {
    [key: string]: any;
} & Parser.Output<{
    [key: string]: any;
}>;

export const SectionBlog = () => {
    const [rssItems, setRssItems] = useState<RSS>({} as RSS);
    useEffect(() => {
        (async () => {
            // dynamic import
            const Parser = (await import("rss-parser")).default;
            const parser = new Parser({
                customFields: {
                    item: ["cover"],
                },
            });
            const feed = await parser.parseURL(`${DOMAIN_URL}/rss.xml`);
            setRssItems(feed);
            logDev(feed);
        })();
    }, []);

    return (
        <section id="blog">
            <Container>
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Latest Posts
                </Typography>
                <Grid container spacing={3}>
                    {rssItems?.items?.slice(0, 3)?.map((i) => {
                        const cover = i.cover.split("/") as string[];
                        cover.splice(3, 0, "4e34f");

                        return (
                            <BlogItem
                                key={i.guid}
                                category={i.categories?.[0]}
                                title={i.title}
                                link={i.link}
                                thumbnail={`${DOMAIN_URL}${cover.join("/")}`}
                                pubDate={i.pubDate}
                                creator={i.creator}
                            />
                        );
                    })}
                </Grid>
            </Container>
        </section>
    );
};
