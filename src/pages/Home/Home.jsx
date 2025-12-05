import Banner from "../Banner/Banner";
import Brands from "./Brands/Brands";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurServices from "./OurServices/OurServices";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
        </div>
    );
};

export default Home;