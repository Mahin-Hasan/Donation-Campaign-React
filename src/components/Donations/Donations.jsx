import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import StoreDonation from "../StoreDonation/StoreDonation";

const Donations = () => {
    const donations = useLoaderData();
    const [donatedCategory, setDonatedCategory] = useState([]);


    useEffect(() => {
        const prevStoredDonations = getStoredDonatedCategory();
        if (donations.length > 0) {
            const currentDonation = [];
            for (const id of prevStoredDonations) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    currentDonation.push(donation);
                }
            }
            // console.log(currentDonation);
            setDonatedCategory(currentDonation);
        }
    }, [donations])
    console.log(donatedCategory);
  
    return (
        <div className="container mx-auto grid grid-cols-2 gap-6 my-20">
            {
                donatedCategory.map(donate =><StoreDonation key={donate.id} donate={donate}></StoreDonation>)
            }
        </div>
    );
};

export default Donations;