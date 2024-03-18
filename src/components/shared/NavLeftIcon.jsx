
import { Link } from 'react-router-dom';
const NavLeftIcon = () => {
    return (
        <div className="flex space-x-1 lg:space-x-5 py-2 justify-end mr-2 lg:mr-5">
              <div className="rounded-full border-2 p-2">
              <Link to="/signup"><svg className="w-3 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></Link>
              </div>


             <div className="rounded-full border-2 p-2">
             <Link to="/messenger"><svg className="w-3 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg></Link>
             </div>

             <div className="rounded-full border-2 p-2">
             <Link to="/notification"><svg className="w-3 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></Link>
             </div>

             <details className="dropdown">
               <summary className="">

            <div className="avatar online ">
               <div className="w-8 lg:w-10 rounded-full py-0 -ml-6">
                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
            </div>
               </summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 -ml-40">
                 <li><Link to="/signin">Sign In</Link></li>
                 <li><a>Sign Out</a></li>
               </ul>
             </details>
        </div>
    );
};

export default NavLeftIcon;