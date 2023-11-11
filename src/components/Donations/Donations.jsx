import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import StoreDonation from "../StoreDonation/StoreDonation";

const Donations = () => {
    const donations = useLoaderData();
    const [donatedCategory, setDonatedCategory] = useState([]);
    const [dataLimit, setDataLimit] = useState(4);
    // const [toggle, setToggle] = useState(false);


    // console.log(toggle);
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

    // useEffect(() => {
    //     if (donatedCategory >= 4) {
    //         console.log('hi');
    //         console.log(toggle);
    //         setToggle(true);
    //         console.log(toggle);
    //     }
    // }, [donatedCategory])


    // console.log(donatedCategory);

    return (
        <div>
            <div className="container mx-auto grid grid-cols-2 gap-6 my-20">
                {
                    donatedCategory.slice(0, dataLimit).map(donate => <StoreDonation key={donate.id} donate={donate}></StoreDonation>)
                }
            </div>
            {/* {console.log(dataLimit)} */}
            {/* <div className={toggle === true ? 'flex' : 'hidden'}> */}
            <div>
                {/* <div className={dataLimit === 4 ? 'flex' : 'hidden'}> */}
                {donatedCategory.length >= 4 && (
                    // <div className={dataLimit === donatedCategory.length ? 'hidden' : ''}>
                    <div>
                        <div className={dataLimit === donatedCategory.length ? 'hidden' : ''}>
                            <div className="text-center my-5">
                                {/* {console.log(donatedCategory.length)} */}
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