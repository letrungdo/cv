/* eslint-disable jsx-a11y/alt-text */
import { Skeleton, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";
import { useCallback, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface Props {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const useStyles = makeStyles<Theme, { width: number; height: number }>(() => ({
    root: {
        position: "relative",
        width: ({ width }) => width,
        height: ({ height }) => height,
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
        },
    },
    s: {
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
    const classes = useStyles({ width, height });

    const onImgLoad = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <div className={classes.root}>
            {src && <Image {...props} layout="responsive" objectFit="cover" onLoad={onImgLoad} />}
            {(!src || loading) && (
                <Skeleton
                    classes={{ root: classes.s }}
                    variant="circular"
                    animation="wave"
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
};

export default ImgSkeleton;
