import CenterPart from "../components/home/CenterPart";
// import LeftPart from "../components/home/LeftPart";
import RightPart from "../components/home/RightPart";

const HomePage = () => {
    return (
        <div className="flex justify-between pt-16 md:pt-16 lg:pt-28 bg-base-100 ">
            {/* <div className="hidden lg:block basis-1/4 border-2 ">
            <LeftPart/>
            </div> */}
            <div className=" border-2  lg:basis-4/6 ">
            <CenterPart/>
            </div>
            <div className="hidden md:block lg:block basis-2/6 ">
            <RightPart/>
            </div>
        </div>
    );
};

export default HomePage;