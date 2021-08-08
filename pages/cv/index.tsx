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
import ReturnToTop from "components/ReturnToTop";

const CV = () => {
    return (
        <>
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
            <ReturnToTop />
        </>
    );
};

export default CV;
