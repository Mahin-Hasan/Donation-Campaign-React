import { useState } from 'react';
import AllCampaigns from '../AllCampaigns/AllCampaigns';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [searchName, setSearchName] = useState('')
    const handleSearchFunctionality = category => {
        console.log('home', category);
        setSearchName(category);
    }
    // console.log('hahash',searchName);
    return (
        <section>
            <Banner handleSearchFunctionality={handleSearchFunctionality}></Banner>
            <AllCampaigns searchName={searchName}></AllCampaigns>
        </section>
    );
};

export default Home;