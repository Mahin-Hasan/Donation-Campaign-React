import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Campaign = ({ campaign }) => {
    const { id, picture, category, title, card_bg, category_bg, text_bg } = campaign;

    return (
        <Link to={`/donate/${id}`}>

            <div className="rounded-xl cursor-pointer">
                <img className="w-full h-[260px] rounded-t-xl" src={picture} alt="picture" />
                <div className={`bg-[${card_bg}] rounded-b-xl p-3 space-y-2`}>
                    <p className={`bg-[${category_bg}] inline py-1 px-2 rounded-md text-[${text_bg}] font-semibold`}>{category}</p>
                    <h1 className={`text-[${text_bg}] font-bold text-xl`}>{title}</h1>
                    <div className="hidden">
                        {/* To load class colors as tailwind class is not loading dynamically for some reasons */}
                        <span className="text-[#1e3a8a] bg-[#bfdbfe] bg-[#3b82f6]">blue</span>
                        <span className="text-[#881337] bg-[#fecdd3] bg-[#f43f5e]">red</span>
                        <span className="text-[#064e3b] bg-[#a7f3d0] bg-[#10b981]">Lime</span>
                        <span className="text-[#78350f] bg-[#fde68a] bg-[#f59e0b]">yellow</span>
                    </div>
                </div>
            </div>
        </Link>

    );
};

Campaign.propTypes ={
    campaign: PropTypes.object
}

export default Campaign;