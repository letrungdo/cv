import Layout from "components/Layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    return {
        props: {
            params: query,
        },
    };
};

const IndexPage = ({}: Props) => <Layout title="Home">{}</Layout>;

export default IndexPage;
