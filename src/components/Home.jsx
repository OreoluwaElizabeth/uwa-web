import AboutUwa from "./AboutUwa";
import Faqs from "./Faqs";
import Features from "./Features";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Howitworks from "./Howitworks";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Herosection />
            <Features />
            <Howitworks />
            <AboutUwa />
            <Faqs />
            <Feedback/>
            <Footer />
        </div>
    );
};

export default Home;