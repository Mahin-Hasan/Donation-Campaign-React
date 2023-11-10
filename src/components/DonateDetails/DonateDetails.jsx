import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonatedItem } from "../../utility/localstorage";



const DonateDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();// in string
    console.log(typeof (id));
    const idNumber = +id;
    console.log(typeof (idNumber));

    const donation = donations.find(donation => donation.id === idNumber);
    console.log(donation);

    console.log(donations.picture);


    const handleDonateBtn = () => {
        saveDonatedItem(idNumber);
        console.log('clicked');
        toast('Successfully Donated')
    }
    return (
        <div className="container mx-auto ">
            <div className="relative ">
                <img className="w-full h-[700px] rounded-t-lg" src={donation.picture} alt="donation" />
                {/* <button className="bg-red-400 px-4 py-2 rounded-md text-white font-semibold">Donate ${donation.price}</button> */}
                <div className="absolute w-full bg-[#0b0b0b80] bottom-0">
                    <button onClick={handleDonateBtn} className={`bg-[${donation.text_bg}] px-4 py-3 ms-6 my-8 rounded-md text-white font-semibold`}>Donate ${donation.price}</button>
                </div>
            </div>
            <div className="my-12">
                <h1 className="text-4xl font-bold mb-4">{donation.title}</h1>
                <p className="text-slate-500">{donation.description}</p>
            </div>
            <div className="hidden">
                {/* To load class colors as tailwind class is not loading dynamically for some reasons */}
                <span className=" bg-[#1e3a8a]">blue</span>
                <span className=" bg-[#881337]">red</span>
                <span className=" bg-[#064e3b]">Lime</span>
                <span className=" bg-[#78350f]">yellow</span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonateDetails;