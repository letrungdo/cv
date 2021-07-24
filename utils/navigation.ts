import SingletonRouter from "next/router";

export const onClickLink = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    ev.preventDefault();
    SingletonRouter.push((ev.target as HTMLAnchorElement).href);
};
