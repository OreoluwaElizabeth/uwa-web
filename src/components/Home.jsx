import AboutUwa from "./AboutUwa";
import Features from "./Features";
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
        </div>
    );
};

export default Home;