import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const AllCampaigns = ({ searchName }) => {
    const [campaign, setCampaign] = useState([]);
    const [searchCampaigns, setSearchCampaigns] = useState('');
    console.log("from allcam", searchName);
    // const {categiry} =campaign;
    console.log(campaign);
    const searchCampaign = campaign.filter(item => item.category === searchName);
    console.log("isfound", searchCampaign);
    // setSearchCampaigns(searchCampaigns);
    // const updateString = () => {
    //     setSearchCampaigns(searchCampaign);
    // };
    // updateString()
    console.log('allcard', searchName);
    useEffect(() => {
        fetch('fund.json')
            .then(res => res.json())
            .then(data => setCampaign(data))
    }, [])

    // useEffect(() => {
    //     setSearchCampaigns(searchCampaign);
    // }, [])
    // console.log(campaign);
    console.log("is it set?", searchCampaigns);



    return (
        <section className="container mx-auto my-20">
            <div className="grid grid-cols-4 gap-6">
                {
                    campaign.filter((item)=>{
                        return searchName === ''? item : item.category === searchName ;
                    }).map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)
                }
            </div>
        </section>
    );
};

export default AllCampaigns;