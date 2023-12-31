/* eslint-disable jsx-a11y/alt-text */
import { Skeleton, styled } from "@mui/material";
import { useCallback, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface Props {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const PREFIX = "ImgSkeleton";
const classes = {
    root: `${PREFIX}-root`,
    s: `${PREFIX}-s`,
};
type StyleProps = {
    width: number;
    height: number;
};
const Root = styled("div")<StyleProps>((props) => ({
    [`&.${classes.root}`]: {
        position: "relative",
        width: props.width,
        height: props.height,
        "& .MuiSkeleton-root": {
            margin: "0 auto",
            zIndex: 1,
        },
        "& img": {
            margin: "0 auto",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
    [`& .${classes.s}`]: {
        position: "absolute",
        top: 0,
        background: "var(--avatar-bg)",
        "&:after": {
            background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent)",
        },
    },
}));

const ImgSkeleton = (props: Props) => {
    const { width, height, src } = props;
    const [loading, setLoading] = useState(true);

    const onImgLoad = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <Root width={width} height={height} className={classes.root}>
            {src && <img {...props} onLoad={onImgLoad} />}
            {(!src || loading) && (
                <Skeleton
                    classes={{ root: classes.s }}
                    variant="circular"
                    animation="wave"
                    width={width}
                    height={height}
                />
            )}
        </Root>
    );
};

export default ImgSkeleton;
