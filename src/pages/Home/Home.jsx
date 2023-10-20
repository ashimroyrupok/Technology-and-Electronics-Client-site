import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import ContactUs from "../../components/ContactUs/ContactUs";
import Review from "../../components/Review/Review";


const Home = () => {
    return (
        <div className="dark:bg-slate-200">

            <Banner></Banner>
            <Brands></Brands>
            <ContactUs></ContactUs>
            <Review></Review>

        
            
        </div>
    );
};

export default Home;