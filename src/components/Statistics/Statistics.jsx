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

            <div className="container mx-auto">
                <Chart
                    type="pie"
                    width={1349}
                    height={550}
                    series={[totalDonations, myDonation]}
                    options={{
                        labels: ['Total Donation', 'My Donation'],
                        colors: ['#FF444A', '#00C49F']
                    }}
                >
                </Chart>
            </div>
        </div>
    );
};

export default Statistics;