import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from "@mui/material-nextjs/v14-pagesRouter";
import config from "config/site";
import theme from "config/theme";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(props: DocumentHeadTagsProps) {
    return (
        <Html lang="en">
            <Head>
                {/* PWA primary color */}
                <meta name="theme-color" content={theme.palette.primary.main} />
                <meta name="description" content={config.siteDescription} />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = documentGetInitialProps;
