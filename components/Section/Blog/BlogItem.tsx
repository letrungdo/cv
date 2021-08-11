/* eslint-disable @next/next/no-img-element */
import { Typography } from "@material-ui/core";

type Props = {
    thumbnail: string;
    category: string;
    title: string;
    createDay: string;
    author: string;
    href: string;
};
const BlogItem = ({ thumbnail, category, title, createDay, author, href }: Props) => {
    return (
        <div className="col-md-4">
            <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                <div className="thumb">
                    <a href="#">
                        <span className="category">{category}</span>
                    </a>
                    <a href="#">
                        <img src={thumbnail} alt="blog-title" />
                    </a>
                </div>
                <div className="details">
                    <Typography variant="h4" className="my-0 title">
                        <a href={href}>{title}</a>
                    </Typography>
                    <ul className="list-inline meta mb-0 mt-2">
                        <li className="list-inline-item">{createDay}</li>
                        <li className="list-inline-item">{author}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
