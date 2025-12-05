import Banner from "../Banner/Banner";
import Brands from "./Brands/Brands";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";


const reviewsPromise = fetch('/data/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
            <Reviews reviewsPromise={reviewsPromise}/>
        </div>
    );
};

export default Home;