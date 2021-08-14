import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { DOMAIN_URL } from "constants/app";
import React, { useCallback, useState } from "react";
import { Waypoint } from "react-waypoint";
import { logDev } from "utils/logs";
import BlogItem from "./BlogItem";

interface Enclosure {
    url: string;
    length?: number;
    type?: string;
}

interface Item {
    link?: string;
    guid?: string;
    title?: string;
    pubDate?: string;
    creator?: string;
    summary?: string;
    content?: string;
    isoDate?: string;
    categories?: string[];
    contentSnippet?: string;
    enclosure?: Enclosure;
    cover?: string;
}

const SectionBlog = () => {
    const [rssItems, setRssItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    const getPost = useCallback(async () => {
        logDev("getPost ...");
        const Parser = (await import("rss-parser")).default;
        const parser = new Parser({
            customFields: {
                item: ["cover"],
            },
        });
        const feed = await parser.parseURL(`${DOMAIN_URL}/rss.xml`);
        if (feed?.items) {
            setRssItems(feed.items.slice(0, 6));
        }
        setLoading(false);
    }, []);

    return (
        <section id="blog">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    Latest Posts
                </Typography>
                {loading && (
                    <Waypoint onEnter={getPost}>
                        <CircularProgress color="secondary" />
                    </Waypoint>
                )}
                <Grid container spacing={3}>
                    {rssItems.map((i) => {
                        const cover = i.cover?.split("/") ?? [];
                        cover.splice(3, 0, "2194e");

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
            </div>
        </section>
    );
};

export default React.memo(SectionBlog);
