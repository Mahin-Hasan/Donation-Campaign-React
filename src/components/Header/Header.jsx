import { NavLink } from "react-router-dom";

const Header = () => {
    const routes =
        <>
            <li><NavLink
                to='/'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-red-500" : ""
                }
            >Home</NavLink></li>
            <li><NavLink
                to='/donations'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-red-500" : ""
                }
            >Donation</NavLink></li>
            <li><NavLink
                to='/statistics'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-red-500" : ""
                }
            >Statistics</NavLink></li>
        </>
    return (
        <nav className="flex justify-between items-center container mx-auto">
            <div>
                <img src="Logo.png" alt="Logo" />
            </div>
            <div>
                <ul className="flex gap-10 font-bold">
                    {routes}
                </ul>
            </div>
        </nav>
    );
};

export default Header;