const Banner = () => {
    return (
        <div className="flex flex-col justify-center items-center py-28 banner-bg space-y-12">
            <div>
                <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
            </div>
            <div>
                <input className='input border rounded-s-md rounded-e-none' type="text" placeholder='Search Here...' />
                <button className="btn rounded-e-md rounded-s-none text-white capitalize hover:bg-red-700 bg-[#FF444A]">Search</button>
            </div>
        </div>
    );
};

export default Banner;