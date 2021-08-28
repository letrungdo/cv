/* eslint-disable jsx-a11y/alt-text */
import { makeStyles, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useCallback, useEffect, useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface Props {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const useStyles = makeStyles<Theme, { loading: boolean }>(() => ({
    root: {
        "& img": {
            display: ({ loading }) => (loading ? "none" : "block"),
            margin: "0 auto",
        },
    },
}));

const ImgSkeleton = (props: Props) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [loading, setLoading] = useState(true);
    const classes = useStyles({ loading });

    const onImgLoad = useCallback(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        if (imgRef.current?.complete) setLoading(false);
    }, []);

    return (
        <div className={classes.root}>
            {loading && <Skeleton variant="circle" animation="wave" width={props.width} height={props.height} />}
            <img ref={imgRef} {...props} onLoad={onImgLoad} />
        </div>
    );
};

export default ImgSkeleton;
