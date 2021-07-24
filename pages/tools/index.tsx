import { Link } from "@material-ui/core";
import Layout, { PageMeta } from "components/Layout";
import React from "react";
import { onClickLink } from "utils";

const pageMeta: PageMeta = {
    title: "Tools",
    description: "Tools for Developer & Students",
};
class Tools extends React.Component {
    render() {
        return (
            <Layout meta={pageMeta}>
                <div className="flex flex-col align-items-center">
                    <Link href="/tools/download-osmosis-notes" onClick={onClickLink}>
                        Download docs osmosis.org notes
                    </Link>
                </div>
            </Layout>
        );
    }
}

export default Tools;
