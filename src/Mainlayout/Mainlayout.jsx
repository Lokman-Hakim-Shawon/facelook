import {Outlet} from 'react-router-dom'
import Navbar from '../components/shared/Navbar';
const Mainlayout = () => {
    return (
        <div>
            <div className='fixed w-full'>
               <Navbar/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;