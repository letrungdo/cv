import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";

const useStyles = makeStyles({
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
            background: "var(--main-color)",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            fontSize: "1.4rem",
            padding: "2px 8px",
            position: "absolute",
            left: 20,
            top: 0,
            zIndex: 1,
        },
    },
    details: {
        padding: "1rem 2rem",
        "& h3": {
            fontSize: "2rem",
            display: "-webkit-Box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            "& a": {
                color: "var(--primary-text)",
                "&:hover": {
                    color: "var(--main-color)",
                },
            },
        },
    },
    meta: {
        fontSize: "1.4rem",
        color: "var(--light-gray-text)",
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
});

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
            <div className={`${classes.root} rounded bg-primary sanim-post`}>
                <div className={classes.thumb}>
                    {category && <span className="category text-light">{category}</span>}
                    <a href={link} target="_blank" rel="noreferrer">
                        <Image
                            src={thumbnail || ""}
                            alt="post-thumbnail"
                            width={7}
                            height={4}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </a>
                </div>
                <div className={classes.details}>
                    <Typography variant="h3" className="mt-0 mb-1">
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
