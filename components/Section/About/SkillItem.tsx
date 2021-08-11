import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

type Props = {
    name: string;
    value: number;
    bgColor: string;
};

const useStyles = makeStyles<Theme, { bgColor: string; width: string | number }>(() =>
    createStyles({
        root: {
            marginBottom: "2rem",
        },
        skillInfo: {
            "& h4": {
                fontSize: "1.6rem",
                fontWeight: 500,
            },
            "& span": {
                fontSize: "1.4rem",
            },
        },
        progress: {
            height: 7,
            marginBottom: 0,
            overflow: "hidden",
            backgroundColor: "#F1F1F1",
            borderRadius: 15,
            boxShadow: "none",
        },
        progressBar: {
            borderRadius: 15,
            float: "left",
            width: ({ width }) => width,
            height: "100%",
            fontSize: "1.2rem",
            lineHeight: 7,
            color: "#fff",
            textAlign: "center",
            backgroundColor: ({ bgColor }) => bgColor,
            boxShadow: "none",
            transition: "width 0.6s ease",
        },
    }),
);

const SkillItem = ({ name, value, bgColor }: Props) => {
    const [width, setWidth] = useState<number | string>(0);
    const classes = useStyles({ bgColor, width });

    const onEnter = () => {
        if (width) return;
        setWidth(`${value}%`);
    };

    return (
        <div className={`${classes.root}`}>
            <div className={`${classes.skillInfo} clearfix`}>
                <Typography variant="h4" className="float-left mb-4 mt-0">
                    {name}
                </Typography>
                <span className="float-right">{value}%</span>
            </div>
            <div className={classes.progress}>
                <Waypoint onEnter={onEnter}>
                    <div
                        className={classes.progressBar}
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={value}
                    />
                </Waypoint>
            </div>
        </div>
    );
};

export default SkillItem;
