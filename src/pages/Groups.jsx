
const Groups = () => {
    return (
        <div className="mt-12 md:mt-16 lg:mt-28 lg:mx-20 shadow-lg">
            <div className="shadow-lg bg-white">  
            {/* profile and name */}
            <div className="flex space-x-2 ml-2 py-2">
            <div className="avatar">
               <div className="w-8 lg:w-10 rounded-full py-0">
                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
            </div>
             <div>
             <h1 className="font-bold">lokman hakim</h1>
             <p>20 min ago</p>
             </div>
            </div>
            <div className="px-2">
                <p >my name is lokman hakim shawon. my father name is abu akkas. my mother name is nadira begum . my brother name is ajijul hoq shanto.my name is lokman hakim shawon. my father name is abu akkas. my mother name is nadira begum . my brother name is ajijul hoq shanto.</p>
            </div>

               {/* img div */}
            <img className="w-full" src='https://i.ibb.co/q9cyD6R/images.jpg'/>
            
            {/* like and comments div */}
            <div>
                <div className="flex justify-between p-2">
                <h1> 29 like</h1>
                <h1>5 Comments</h1>
                </div>
                <hr className="border-2 border-gray-300"/>
                <div className="flex justify-around py-5">
                    <button className="border-2 lg:border-gray-500 px-5 rounded-lg">Like</button>
                    <button className="border-2 lg:border-gray-500 px-5 rounded-lg">Comment</button>
                    <button className="border-2 lg:border-gray-500 px-5 rounded-lg">Share</button>
                </div>
                <hr className="border-2 border-gray-300"/>
            </div>

            </div>
        </div>
    );
};

export default Groups;