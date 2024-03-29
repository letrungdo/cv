import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const hxStyle = {
    fontFamily: "Rubik, sans-serif",
    margin: "2rem 0",
    fontWeight: 700,
};
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#489b71",
        },
        secondary: {
            main: "#333333",
        },
        text: {
            primary: "#454360",
            secondary: "#666666",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fafafa",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: { backgroundColor: "#f5f0e7" },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "unset",
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    minHeight: "auto",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    "&:focus": {
                        backgroundColor: "unset",
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.Mui-focusVisible": {
                        backgroundColor: "unset",
                    },
                },
            },
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 16,
        fontFamily: [
            "Rubik",
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
