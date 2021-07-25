import { Link } from "@material-ui/core";
import Layout, { PageMeta } from "components/Layout";
import { DOWNLOAD_OSMOSIS_NOTES_ROUTE } from "constants/routePath";
import React from "react";
import { onClickLink } from "utils";

const pageMeta: PageMeta = {
    title: "Home",
    description: "Tools for Developer & Students",
};
class IndexPage extends React.Component {
    render() {
        return (
            <Layout meta={pageMeta}>
                <div className="flex flex-col align-items-center">
                    <Link href={DOWNLOAD_OSMOSIS_NOTES_ROUTE} onClick={onClickLink}>
                        Download docs osmosis.org notes
                    </Link>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;
