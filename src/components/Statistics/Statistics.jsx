import Chart from "react-apexcharts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import { useEffect, useState } from "react";

const Statistics = () => {
    const allData = useLoaderData();
    const [totalDonations, setTotalDonations] = useState(0);

    const totalDonation = allData.length;
    const myDonation = getStoredDonatedCategory().length;
    useEffect(() => {
        const remaining = totalDonation - myDonation;
        setTotalDonations(remaining);
    }, [])

    return (
        <div className="my-20">

            <div className="container flex justify-center mx-auto">
                <div className="w-full sm:w-[700px] h-[550px]">
                    <Chart
                        className="w-full"
                        type="pie"
                        series={[totalDonations, myDonation]}
                        options={{
                            labels: ['Total Donation', 'Your Donation'],
                            colors: ['#FF444A', '#00C49F']
                        }}
                    >
                    </Chart>
                </div>
            </div>
        </div>
    );
};

{/* <Chart
className="w-full"
type="pie"
width={1349}
height={550}
series={[totalDonations, myDonation]}
options={{
    labels: ['Total Donation', 'My Donation'],
    colors: ['#FF444A', '#00C49F']
}}
>
</Chart> */}
export default Statistics;