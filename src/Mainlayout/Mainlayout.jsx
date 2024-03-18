import {Outlet} from 'react-router-dom'
import Navbar from '../components/shared/Navbar';
import LeftPart from '../components/home/LeftPart';

const Mainlayout = () => {
    return (
        <div className=''>
            <div className='fixed w-full z-10'>
               <Navbar/>
            </div>
            <div className='flex'>
                <div className='hidden md:block lg:block basis-1/5  md:mt-16 lg:mt-28'>
                      <LeftPart/>
                 </div>
                <div className='md:basis-4/5 lg:basis-4/5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Mainlayout;