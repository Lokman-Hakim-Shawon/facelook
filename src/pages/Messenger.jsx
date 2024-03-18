import RightPart from "../components/home/RightPart";

const Messenger = () => {
    return (
        <div className=" mt-12 md:mt-16 lg:mt-28 flex">
            <div className=" md:basis-4/6 lg:basis-4/6 border-2 grid grid-cols-1 shadow-lg bg-gray-100 min-h-screen">
              <div className=" flex space-x-2 p-5  border-2  md:w-1/2 lg:w-1/2 bg-white fixed">
              <svg className="w-8 lg:w-8 lg:px-2 my-2 bg-gray-300 border-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <input type='text' className="input border-2 border-red-500 w-full" placeholder='write messege' />
              <button className="btn bg-blue-600 text-white">Send</button>
              </div>
              <div className="w-screen  border-2  min-h-4 mt-20 p-5 md:w-full lg:w-full">
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
                <p className="text-start text-blue-700 font-bold">lokman Hakim shawon</p>
                <p className="text-end text-red-700 font-bold">lokman Hakim shawon</p>
              </div>
            </div>
            <div className=" md:basis-2/6 lg:basis-2/6 hidden md:block lg:block">
                <RightPart/>
                </div>
        </div>
    );
};

export default Messenger;