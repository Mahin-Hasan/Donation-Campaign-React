import { useState } from "react";
import PropTypes from 'prop-types';
const Banner = ({ handleSearchFunctionality }) => {
    const [categoryName, setCategoryName] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
    }
    const handleSearchText = e => {
        setCategoryName(e.target.value);

    }
    
    return (
        <div className="flex flex-col justify-center items-center py-28 banner-bg space-y-12">
            <div>
                <h2 className="text-2xl sm:text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleSearchText} className='input border rounded-s-md rounded-e-none' type="text" placeholder='Search Here...' />
                    <input onClick={() => handleSearchFunctionality(categoryName)} className="btn rounded-e-md rounded-s-none text-white capitalize hover:bg-red-700 bg-[#FF444A]" type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleSearchFunctionality: PropTypes.func
}
export default Banner;