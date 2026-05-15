
import AdmissionHero from "../sections/AdmissionHero";
import AdmissionNotice from "../sections/AdmissionNotice";
import ApplicationProcess from "../sections/ApplicationProcess";
import Qualifications from "../sections/Qualifications";
import FeeInformation from "../sections/FeeInformation";
import AdmissionResults from "../sections/AdmissionResults";

const AdmissionPage = () => {

    return (
        <main className="min-h-screen bg-[#F7F1E3] text-[#1F1A17]">
            <AdmissionHero />
            <AdmissionNotice />
            <ApplicationProcess />
            <Qualifications />
            <FeeInformation />
            <AdmissionResults />
        </main>
    );
};

export default AdmissionPage;
