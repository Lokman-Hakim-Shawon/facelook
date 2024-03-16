import CenterPart from "../components/home/CenterPart";
import LeftPart from "../components/home/LeftPart";
import RightPart from "../components/home/RightPart";

const HomePage = () => {
    return (
        <div className="flex justify-between pt-16 md:pt-16 lg:pt-28 bg-base-200 ">
            <div className="hidden lg:block border-2 border-red-500 h-screen basis-1/5">
            <LeftPart/>
            </div>
            <div className="border-2 border-red-500 h-screen flex-1">
            <CenterPart/>
            </div>
            <div className="hidden lg:block border-2 border-red-500 h-screen basis-1/5">
            <RightPart/>
            </div>
        </div>
    );
};

export default HomePage;