import { Grid, Hidden, makeStyles, Select, Typography } from "@material-ui/core";
import clsx from "clsx";
import { cvConfig, WorkType } from "config/cv";
import React, { useCallback, useState } from "react";
import WorkModal, { WorkModalData } from "./Modal";
import WorkItem from "./WorkItem";

const useStyles = makeStyles({
    menuPc: {
        "& li": {
            color: "var(--primary-text)",
            cursor: "pointer",
            fontSize: "1.6rem",
            fontWeight: 700,
            position: "relative",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
                color: "var(--main-color)",
            },
            "&:not(:last-child)": {
                marginRight: "1.8rem",
            },
        },
        "& .current": {
            color: "var(--main-color)",
        },
    },
    dropdown: {
        width: "100%",
        color: "var(--primary-text)",
        "& .MuiSelect-icon": {
            color: "unset",
        },
    },
});

const SectionWorks = () => {
    const classes = useStyles();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isotope = React.useRef<any>();
    const [type, setType] = useState(WorkType.Everything);
    const [modal, setModal] = React.useState<WorkModalData>({ open: false });

    const handleClose = () => {
        setModal((state) => ({ ...state, open: false }));
    };

    const onChangeType = useCallback(
        (type: string) => async () => {
            setType(type);
            if (isotope.current === undefined) {
                const Isotope = (await import("isotope-layout")).default;
                isotope.current = new Isotope("#work-container", {
                    itemSelector: ".work-item",
                    percentPosition: true,
                });
            }
            if (type === WorkType.Everything) {
                isotope.current.arrange({ filter: WorkType.Everything });
            } else {
                isotope.current.arrange({ filter: `.${type}` });
            }
        },
        [],
    );

    const handleChange = useCallback(
        (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            onChangeType(event.target.value as string)();
        },
        [onChangeType],
    );

    return (
        <section id="works">
            <div className="container">
                <Typography variant="h2" className="section-title sanim">
                    Recent works
                </Typography>
                <Hidden only={["xs"]}>
                    <ul className={`${classes.menuPc} mb-4 list-inline sanim`}>
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
                <Grid container spacing={0} id="work-container">
                    {cvConfig.works.map((w) => (
                        <WorkItem key={w.href} {...w} setModal={setModal} />
                    ))}
                </Grid>
            </div>
            <WorkModal onClose={handleClose} data={modal} />
        </section>
    );
};

export default React.memo(SectionWorks);
