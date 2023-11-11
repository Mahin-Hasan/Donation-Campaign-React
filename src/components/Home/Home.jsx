import { useState } from 'react';
import AllCampaigns from '../AllCampaigns/AllCampaigns';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [searchName, setSearchName] = useState('')
    const handleSearchFunctionality = category => {
        setSearchName(category);
    }
    return (
        <section>
            <Banner handleSearchFunctionality={handleSearchFunctionality}></Banner>
            <AllCampaigns searchName={searchName}></AllCampaigns>
        </section>
    );
};

export default Home;