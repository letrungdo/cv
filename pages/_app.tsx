import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import "assets/cv/css/index.css";
import "assets/styles/index.scss";
import "components/Icons/FontAwesome";
import theme from "config/theme";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
