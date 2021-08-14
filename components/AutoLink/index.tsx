import NextLink from "next/link";
import { isInteralLink } from "utils";

type Props = {
    className?: string;
    href: string;
    children: React.ReactNode;
};

const AutoLink = ({ className = "", href, children }: Props) => (
    <>
        {isInteralLink(href) ? (
            <NextLink href={href}>
                <a className={className}>{children}</a>
            </NextLink>
        ) : (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )}
    </>
);

export default AutoLink;
