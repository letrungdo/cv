import { Link } from "@material-ui/core";
import { isInteralLink, onClickLink } from "utils";

type Props = {
    className?: string;
    href: string;
    children: React.ReactNode;
};

const AutoLink = ({ className = "", href, children }: Props) => (
    <>
        {isInteralLink(href) ? (
            <Link className={className} href={href} onClick={onClickLink}>
                {children}
            </Link>
        ) : (
            <Link className={className} href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        )}
    </>
);

export default AutoLink;
