import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material/styles";
import "assets/styles/index.scss";
import theme from "config/theme";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

declare global {
    interface Window {
        ScrollReveal: scrollReveal.ScrollRevealObject;
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default MyApp;
