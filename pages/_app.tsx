import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "assets/styles/index.scss";
import theme from "config/theme";
import type { AppProps } from "next/app";

declare global {
    interface Window {
        ScrollReveal: scrollReveal.ScrollRevealObject;
    }
}

function MyApp(props: AppProps) {
    return (
        <AppCacheProvider {...props}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <props.Component {...props.pageProps} />
                </ThemeProvider>
            </StyledEngineProvider>
        </AppCacheProvider>
    );
}

export default MyApp;
