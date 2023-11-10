import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const AllCampaigns = () => {
    const [campaign, setCampaign] = useState([]);

    useEffect(() => {
        fetch('fund.json')
            .then(res => res.json())
            .then(data => setCampaign(data))
    }, [])
    console.log(campaign);


    return (
        <section className="container mx-auto my-20">
            <div className="grid grid-cols-4 gap-6">
                {
                    campaign.map(campaign =><Campaign key={campaign.id} campaign={campaign}></Campaign>)
                }
            </div>
        </section>
    );
};

export default AllCampaigns;