/* eslint-disable @next/next/no-img-element */
import Header from "components/CV/Header";
import {
    SectioContact,
    SectionAbout,
    SectionBlog,
    SectionExperience,
    SectionHome,
    SectionPrices,
    SectionServices,
    SectionTestimonials,
    SectionWorks,
} from "components/CV/Section";

const CV = () => {
    return (
        <>
            {/* <Preloader /> */}
            <Header />
            <main className="content pb-5">
                <SectionHome />
                <SectionAbout />
                <SectionServices />
                <SectionExperience />
                <SectionWorks />
                <SectionPrices />
                <SectionTestimonials />
                <SectionBlog />
                <SectioContact />
            </main>
            <a id="return-to-top">
                <i className="fas fa-arrow-up"></i>
            </a>
        </>
    );
};

export default CV;
