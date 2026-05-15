import About from "../sections/About";
import Admission from "../sections/Admission";
import CampusLife from "../sections/CampusLife";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Notice from "../sections/Notice";
import Principal from "../sections/Principal";
import Stats from "../sections/Stats";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Notice />
            <Principal />
            <Stats />
            <CampusLife />
            <Admission />
            <Contact />
        </>
    );
};

export default HomePage;