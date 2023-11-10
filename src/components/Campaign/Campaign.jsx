import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
    const { id, picture, category, title, card_bg, category_bg, text_bg } = campaign;
    console.log(card_bg, category_bg, text_bg);

    return (
        <Link to={`/donate/${id}`}>

            <div className="rounded-xl cursor-pointer">
                <img className="w-full h-[260px] rounded-t-xl" src={picture} alt="" />
                <div className={`bg-[${card_bg}] rounded-b-xl p-3 space-y-2`}>
                    <p className={`bg-[${category_bg}] inline py-1 px-2 rounded-md text-[${text_bg}] font-semibold`}>{category}</p>
                    <h1 className={`text-[${text_bg}] font-bold text-xl`}>{title}</h1>
                </div>
            </div>
        </Link>

    );
};

export default Campaign;