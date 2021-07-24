import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#eb5505",
        },
        secondary: {
            main: "#333333",
        },
        text: {
            primary: "var(--primary-text)",
            secondary: "var(--secondary-text)",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "var(--primary-bg)",
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
        h1: {
            fontFamily: "Roboto",
        },
    },
});

export default theme;
