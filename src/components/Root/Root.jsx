import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="my-10">
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;