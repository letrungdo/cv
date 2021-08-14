/* eslint-disable @next/next/no-img-element */
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            overflow: "hidden",
            transform: "translateY(0)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
                transform: "translateY(-10px)",
            },
        },
        thumb: {
            position: "relative",
            overflow: "hidden",
            "& img": {
                transform: "scale(1)",
                transition: "all 0.3s ease-in-out",
            },
            "&:hover": {
                "& img": {
                    transform: "scale(1.1)",
                },
            },
            "& .category": {
                background: "#FF4C60",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                color: "#FFF",
                fontSize: 14,
                padding: "2px 8px",
                position: "absolute",
                left: 20,
                top: 0,
                zIndex: 1,
            },
        },
        details: {
            padding: "1rem 2rem",
            "& h4": {
                fontSize: "2rem",
                "& a": {
                    color: "#353353",
                    "&:hover": {
                        color: "#FF4C60",
                    },
                },
            },
        },
        meta: {
            fontSize: "1.4rem",
            color: "#8B88B1",
            "& li": {
                display: "inline-block",
                "&:after": {
                    content: '""',
                    background: "#8B88B1",
                    borderRadius: "50%",
                    display: "inline-block",
                    height: 3,
                    marginLeft: "0.6rem",
                    verticalAlign: "middle",
                    width: 3,
                },
                "&:last-child:after": {
                    display: "none",
                },
            },
        },
    }),
);
type Props = {
    thumbnail?: string;
    category?: string;
    title?: string;
    pubDate?: string;
    creator?: string;
    link?: string;
};
const BlogItem = ({ thumbnail, category, title, pubDate, creator, link }: Props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className={`${classes.root} rounded bg-white shadow-dark wow fadeIn`}>
                <div className={classes.thumb}>
                    <span className="category">{category}</span>
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={thumbnail} alt="blog-title" />
                    </a>
                </div>
                <div className={classes.details}>
                    <Typography variant="h4" className="mt-0">
                        <a href={link} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                    </Typography>
                    <ul className={`${classes.meta} mb-0 mt-2`}>
                        <li className="mr-1">{new Date(pubDate || "").toLocaleDateString()}</li>
                        <li>{creator}</li>
                    </ul>
                </div>
            </div>
        </Grid>
    );
};

export default BlogItem;
