import { Modal, Typography, styled } from "@mui/material";
import Fade from "@mui/material/Fade";
import Image from "next/image";

const PREFIX = "WorkModal";
const classes = {
    modal: `${PREFIX}-modal`,
    paper: `${PREFIX}-paper`,
    thumbnail: `${PREFIX}-thumbnail`,
    description: `${PREFIX}-description`,
};
const Root = styled(Modal)(() => ({
    [`&.${classes.modal}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    [`& .${classes.paper}`]: {
        position: "relative",
        width: "80%",
        background: "var(--main-bg)",
        borderRadius: 25,
        padding: 30,
        textAlign: "left",
        maxWidth: 650,
        margin: "40px auto",
    },
    [`& .${classes.thumbnail}`]: {
        borderRadius: 10,
    },
    [`& .${classes.description}`]: {
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
    },
}));

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
    return (
        <Root open={open} onClose={onClose} className={classes.modal}>
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
        </Root>
    );
}

export default WorkModal;
