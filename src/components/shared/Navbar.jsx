// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavCenterIcon from "./NavCenterIcon";
import NavLeftIcon from "./NavLeftIcon";
import ResponsiveBar from "./ResponsiveBar";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:py-2 lg:py-5 shadow-lg bg-base-100">
            <div className=" ml-2 lg:ml-5 flex items-center space-x-2 lg:space-x-5 flex-1">
                <h1 className='text-sm lg:text-3xl font-bold text-blue-500'>facelook</h1>
                <div className="border-2 p-2 rounded-full bg-gray-100">
                <svg className="w-2 lg:w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>
                <div className="">
                    <ResponsiveBar/>
                </div>
            </div>
            <div className="flex-1 hidden md:block lg:block">
                <NavCenterIcon/>
            </div>
            <div className="flex-1">
                <NavLeftIcon/>
            </div>
        </div>
    );
};

export default Navbar;