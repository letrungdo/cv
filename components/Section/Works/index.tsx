import { Container, createStyles, Grid, Hidden, makeStyles, Select, Typography } from "@material-ui/core";
import clsx from "clsx";
import { cvConfig, WorkType } from "config/cv";
import { useCallback, useState } from "react";
import WorkItem from "./WorkItem";

const useStyles = makeStyles(() =>
    createStyles({
        menuPc: {
            "& li": {
                color: "#5E5C7F",
                cursor: "pointer",
                fontSize: "1.6rem",
                fontWeight: 700,
                position: "relative",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    color: "#FF4C60",
                },
                "&:not(:last-child)": {
                    marginRight: "1.8rem",
                },
            },
            "& .current": {
                color: "#FF4C60",
            },
        },
        dropdown: {
            width: "100%",
        },
    }),
);

export const SectionWorks = () => {
    const classes = useStyles();

    const [type, setType] = useState(WorkType.Everything);
    const onChangeType = useCallback(
        (type: string) => () => {
            setType(type);
        },
        [],
    );

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setType(event.target.value as string);
    };

    return (
        <section id="works">
            <Container>
                <Typography variant="h2" className="section-title wow fadeInUp">
                    Recent works
                </Typography>
                <Hidden only={["xs"]}>
                    <ul className={`${classes.menuPc} mb-4 list-inline wow fadeInUp`}>
                        {Object.keys(WorkType).map((t) => (
                            <li
                                key={t}
                                className={clsx("list-inline-item", type === WorkType[t] ? "current" : "")}
                                onClick={onChangeType(WorkType[t])}
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </Hidden>
                <Hidden smUp>
                    <Select className={`${classes.dropdown} mb-2`} native value={type} onChange={handleChange}>
                        {Object.keys(WorkType).map((t) => (
                            <option key={t} value={WorkType[t]}>
                                {t}
                            </option>
                        ))}
                    </Select>
                </Hidden>
                <Grid container spacing={3}>
                    {cvConfig.works
                        .filter((w) => (type === WorkType.Everything ? true : w.type.includes(type)))
                        .map((w) => (
                            <WorkItem key={w.href} {...w} />
                        ))}
                </Grid>
            </Container>
        </section>
    );
};
