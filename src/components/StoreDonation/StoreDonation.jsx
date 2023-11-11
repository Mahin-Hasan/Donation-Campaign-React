import PropTypes from 'prop-types';

const StoreDonation = ({ donate }) => {
    const { picture, price, title, category, category_bg, card_bg, text_bg } = donate;
    return (
        <div className="mx-4 sm:mx-0">
            <div className="card card-side shadow-xl">
                <figure className="w-[340px] h-[230px]"><img className="h-full w-full" src={picture} alt="Movie" /></figure>
                <div className={`p-5 w-full bg-[${card_bg}] rounded-e-xl`}>
                    <div>
                        <p className={`bg-[${category_bg}] inline py-1 px-2 rounded-md text-[${text_bg}] font-semibold`}>{category}</p>
                        <h2 className={`text-[${text_bg}] font-bold text-xl`}>{title}</h2>
                        <p className={`text-[${category_bg}] text-bold text`}>${price}.00</p>
                        <button className={`bg-[${text_bg}] px-4 py-3  mt-3 rounded-md text-white font-semibold`}>View Details</button>
                    </div>
                    <div className="hidden">
                        <span className="text-[#1e3a8a] bg-[#bfdbfe] bg-[#3b82f6]">blue</span>
                        <span className="text-[#881337] bg-[#fecdd3] bg-[#f43f5e]">red</span>
                        <span className="text-[#064e3b] bg-[#a7f3d0] bg-[#10b981]">Lime</span>
                        <span className="text-[#78350f] bg-[#fde68a] bg-[#f59e0b]">yellow</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
StoreDonation.propTypes = {
    donate: PropTypes.object
}

export default StoreDonation;