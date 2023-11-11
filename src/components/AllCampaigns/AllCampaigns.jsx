import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";
import PropTypes from 'prop-types';



const AllCampaigns = ({ searchName }) => {
    const [campaign, setCampaign] = useState([]);
    
    useEffect(() => {
        fetch('fund.json')
            .then(res => res.json())
            .then(data => setCampaign(data))
    }, [])

   
    const storeSearchName = searchName;
    const searchNameLower = storeSearchName.toLowerCase();



    return (
        <section className="container mx-auto my-20">
            <div className="grid mx-4 sm:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    campaign.filter((item) => {
                        return searchNameLower === ''
                            ? item
                            : item.category.toLowerCase() === searchNameLower;
                    }).map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)
                }
            </div>
        </section>
    );
};

AllCampaigns.propTypes ={
    searchName: PropTypes.string
}

export default AllCampaigns;