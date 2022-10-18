import React,{ useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

import {Link} from 'react-router-dom';


function Nav() {
    const [nav,setNav]= useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>
        <div className='flex items-center'>
        <Link to='/'><ion-icon name="card-outline"></ion-icon></Link>
        <Link to='/'><h1 className='w-full text-3xl font-bold text-yellow-500 pl-3'>BANKING SYSTEM</h1></Link>
        
        </div>
        
        <ul className='hidden md:flex'>
            <li className="p-4 hover:text-gray-300 text-xl hover:scale-125 duration-500" ><Link to='/'>Home</Link></li>
            <li className="p-4 hover:text-gray-300 text-xl hover:scale-125 duration-500" ><Link to='/customers'>Customers</Link></li>
            <li className="p-4 hover:text-gray-300 text-xl hover:scale-125 duration-500" ><Link to='/transfers'>Transfers</Link></li>
            <Link to='/customers'><button className='bg-white w-[150px]  py-2 rounded-md font-bold my-2 mx-auto text-black hover:scale-105 hover:text-yellow-500 duration-500'>Transfer Now</button></Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'bg-black/70 fixed top-0 left-0 w-[60%] h-full border-r ease-in-out duration-500 backdrop-blur-md' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-yellow-500 m-10'>BANKING SYSTEM.</h1>
        <ul className='p-4 uppercase ml-5'>
            <li className="p-4 border-b border-gray-600" ><Link to='/'>Home</Link></li>
            <li className="p-4 border-b border-gray-600" ><Link to='/customers'>Customers</Link></li>
            <li className="p-4 border-b border-gray-600" ><Link to='/transfers'>Transfers</Link></li>
        </ul>
        </div>
    </div>
  );
}

export default Nav;
