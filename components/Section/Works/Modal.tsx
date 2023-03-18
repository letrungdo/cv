import { Modal, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            position: "relative",
            width: "80%",
            background: "var(--main-bg)",
            borderRadius: 25,
            padding: 30,
            textAlign: "left",
            maxWidth: 650,
            margin: "40px auto",
        },
        thumbnail: {
            borderRadius: 10,
        },
        description: {
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
        },
    })
);

export interface WorkModalData {
    open: boolean;
    title?: string;
    description?: string;
    href?: string;
    thumbnail?: string;
}

interface Props {
    onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    data: WorkModalData;
}

function WorkModal({ onClose, data: { open, title, description, thumbnail, href } }: Props) {
    const classes = useStyles();

    return (
        <Modal open={open} onClose={onClose} className={classes.modal}>
            <Fade in={open} timeout={300}>
                <div className={classes.paper}>
                    {thumbnail && (
                        <Image
                            src={thumbnail}
                            alt="work-thumbnail"
                            width={6}
                            height={4}
                            className={classes.thumbnail}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    )}
                    <a href={href || "#"} target="_blank" rel="noreferrer">
                        <Typography variant="h3">{title}</Typography>
                    </a>
                    <p className={classes.description}>{description}</p>
                </div>
            </Fade>
        </Modal>
    );
}

export default WorkModal;
