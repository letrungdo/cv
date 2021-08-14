import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { useRef, useState } from "react";
import { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginBottom: "3rem",
            "& .icon": {
                fontSize: "3.6rem",
                color: "#DEDEEA",
                float: "left",
            },
        },
        details: {
            marginLeft: "6rem",
            "& .number": {
                fontSize: "3rem",
            },
        },
    }),
);
type Props = {
    icon: string;
    name: string;
    count: number;
};
const FactItem = ({ icon, name, count }: Props) => {
    const classes = useStyles();

    const countUpRef = useRef(null);
    const [run, setRun] = useState(false);
    const { start } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: count,
        duration: 1,
    });
    const onEnter = () => {
        if (run) return;
        setRun(true);
        start();
    };

    return (
        <Grid item xs={12} sm={6} md={3}>
            <div className={classes.root}>
                <span className={`icon ${icon}`}></span>
                <div className={classes.details}>
                    <Typography variant="h3" className="mb-0 mt-0 number">
                        <Waypoint onEnter={onEnter}>
                            <em ref={countUpRef} className="count" />
                        </Waypoint>
                    </Typography>
                    <p className="mb-0">{name}</p>
                </div>
            </div>
        </Grid>
    );
};

export default FactItem;
