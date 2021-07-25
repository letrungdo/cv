import AutoLink from "components/AutoLink";
import Layout, { PageMeta } from "components/Layout";
import { DOWNLOAD_OSMOSIS_NOTES_ROUTE } from "constants/routePath";
import React from "react";

const pageMeta: PageMeta = {
    title: "Home",
    description: "Tools for Developer & Students",
};
class IndexPage extends React.Component {
    render() {
        return (
            <Layout meta={pageMeta}>
                <div className="flex flex-col align-items-center">
                    <AutoLink href={DOWNLOAD_OSMOSIS_NOTES_ROUTE}>Download docs osmosis.org notes</AutoLink>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;
