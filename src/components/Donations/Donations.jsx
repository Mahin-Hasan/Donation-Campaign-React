import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import StoreDonation from "../StoreDonation/StoreDonation";

const Donations = () => {
    const donations = useLoaderData();
    const [donatedCategory, setDonatedCategory] = useState([]);
    const [dataLimit, setDataLimit] = useState(4);
    


  
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
            setDonatedCategory(currentDonation);
        }
    }, [donations])


    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
                {
                    donatedCategory.slice(0, dataLimit).map(donate => <StoreDonation key={donate.id} donate={donate}></StoreDonation>)
                }
            </div>
         
            <div>
               
                {donatedCategory.length >= 4 && (
                   
                    <div>
                        <div className={dataLimit === donatedCategory.length ? 'hidden' : ''}>
                            <div className="text-center my-5">
                                <button onClick={() => setDataLimit(donatedCategory.length)} className="btn bg-[#009444] hover:bg-green-800 text-white font-bold capitalize">See All Jobs</button>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>

    );
};

export default Donations;