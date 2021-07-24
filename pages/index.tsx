import Layout, { PageMeta } from "components/Layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    return {
        props: {
            params: query,
        },
    };
};
const pageMeta: PageMeta = {
    title: "Home",
};

const IndexPage = ({}: Props) => <Layout meta={pageMeta}>{}</Layout>;

export default IndexPage;
