
const Notifications = () => {
    return (
        <div className="mt-12 md:mt-16 lg:mt-28 lg:mx-20 w-screen md:w-3/4 lg:w-3/4">
           <div className="p-5 shadow-lg ">
           <div className="flex space-x-5 items-center font-bold">
           <div className="avatar">
               <div className="w-8 lg:w-10 rounded-full py-0">
                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
            </div>
            <h1>name</h1>
           </div>
           <div className="flex justify-between items-center">
           <h1>lokman hakim shawon</h1>
           <button className="btn bg-blue-600 text-white">ok</button>
           </div>
           </div>
           {/* 2nd */}
           <div className="p-5 shadow-lg ">
           <div className="flex space-x-5 items-center font-bold">
           <div className="avatar">
               <div className="w-8 lg:w-10 rounded-full py-0">
                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
            </div>
            <h1>name</h1>
           </div>
           <div className="flex justify-between items-center">
           <h1>lokman hakim shawon</h1>
           <button className="btn bg-blue-600 text-white">ok</button>
           </div>
           </div>
           
        </div>
    );
};

export default Notifications;