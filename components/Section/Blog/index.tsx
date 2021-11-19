import { CircularProgress, Grid, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { DOMAIN_URL } from "constants/app";
import React, { useCallback, useEffect, useRef, useState } from "react";
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

const useStyles = makeStyles(() =>
    createStyles({
        progress: {
            color: "var(--secondary-text)",
        },
    })
);

const SectionBlog = () => {
    const classes = useStyles();
    const [rssItems, setRssItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const blogRef = useRef<HTMLElement>(null);
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

    useEffect(() => {
        const blog = blogRef.current;
        if (!blog) return;
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(blog);
                    observer.disconnect();
                    getPost();
                }
            });
        };
        const observer = new IntersectionObserver(callback);
        observer.observe(blog);
    }, [getPost]);

    return (
        <section ref={blogRef} id="blog">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    Latest Posts
                </Typography>
                {loading && <CircularProgress className={classes.progress} />}
                <Grid container spacing={3}>
                    {rssItems.map((i) => {
                        const cover = i.cover?.split("/") ?? [];
                        cover.splice(3, 0, "105fa");

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
