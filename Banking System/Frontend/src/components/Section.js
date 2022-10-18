import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-router-dom';

function Section() {
  return (
    <div className='text-white ' >
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='md:text-2xl sm:text-xl text-yellow-500 font-bold p-2'>Easy Cash Transfer</p>
            <h1 className='md:text-7xl sm:6xl text-4xl font-bold md:py-6'>Have Full <span className='text-yellow-500'>Control.</span></h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm-text-4xl texl-xl font-bold py-4'>Fast and efficient for</p>
                <Typed className='md:text-5xl sm-text-4xl texl-xl font-bold md:pl-4 pl-2' strings={['Managing','Transfering']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-300'>Tranfer Money online, View All Customers and View All Transfers.</p>
            <Link to='/customers'> <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-yellow-500 hover:scale-105 hover:text-gray-300 hover:bg-black-900 duration-500'>Transfer Now</button></Link>
        </div>
    </div>
  );
}

export default Section;