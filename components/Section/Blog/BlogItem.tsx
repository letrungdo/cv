/* eslint-disable @next/next/no-img-element */
import { Typography } from "@material-ui/core";

type Props = {
    thumbnail?: string;
    category?: string;
    title?: string;
    pubDate?: string;
    creator?: string;
    link?: string;
};
const BlogItem = ({ thumbnail, category, title, pubDate, creator, link }: Props) => {
    return (
        <div className="col-md-4">
            <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                <div className="thumb">
                    <span className="category">{category}</span>
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={thumbnail} alt="blog-title" />
                    </a>
                </div>
                <div className="details">
                    <Typography variant="h4" className="my-0 title">
                        <a href={link} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                    </Typography>
                    <ul className="list-inline meta mb-0 mt-2">
                        <li className="list-inline-item">{new Date(pubDate || "").toLocaleDateString()}</li>
                        <li className="list-inline-item">{creator}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
