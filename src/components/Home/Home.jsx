import AllCampaigns from '../AllCampaigns/AllCampaigns';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <section>
           <Banner></Banner>
           <AllCampaigns></AllCampaigns>
        </section>
    );
};

export default Home;