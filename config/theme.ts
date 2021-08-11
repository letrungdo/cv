import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const hxStyle = {
    fontFamily: "Rubik, sans-serif",
    margin: "2rem 0 4rem 0",
    fontWeight: 700,
};
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#FF4C60",
        },
        secondary: {
            main: "#333333",
        },
        text: {
            primary: "#1a1a1a",
            secondary: "#666666",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    overrides: {
        MuiAppBar: {
            colorDefault: { backgroundColor: "#f5f0e7" },
        },
        MuiMenuItem: {
            root: {
                minHeight: "auto",
            },
        },
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: "unset",
                },
            },
        },
        MuiListItem: {
            root: {
                "&.Mui-focusVisible": {
                    backgroundColor: "unset",
                },
            },
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 16,
        fontFamily: [
            "Rubik",
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
        ].join(","),
        button: {
            textTransform: "none",
        },
        h1: {
            ...hxStyle,
            fontSize: "3.6rem",
        },
        h2: {
            ...hxStyle,
            fontSize: "2.8rem",
        },
        h3: {
            ...hxStyle,
            fontSize: "2.4rem",
        },
        h4: {
            ...hxStyle,
            fontSize: "1.8rem",
            fontWeight: 500,
        },
    },
});

export default theme;
