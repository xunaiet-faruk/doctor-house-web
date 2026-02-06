import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Chartbooking from './Chartbooking';

const Mybook = () => {
    const location =useLocation();
    const doctor =location.state;
    const [doctors,setDoctos] =useState(location.state)
    if(!doctors){
        return (
            <div className="text-center mt-20">
                <h1 className="text-5xl font-bold text-red-500">
                    No Appointment Found
                </h1>
            </div>
        );
    }
    const chartData = [
        {
            name: doctor.name,
            fee: parseInt(doctor.fee.replace("৳", ""))
        }
    ]

    const HandleCancel =()=>{
        setDoctos(null)
    }
    console.log(doctor);
    return (
        <div>
            <Chartbooking doctor={chartData}/>
            <h1 className='text-center text-4xl py-5 font-bold'>My Today Appoinment</h1>
            <div className="bg-white shadow-xl rounded-xl container mx-auto  h-[200px] mt-12 mb-12 ">
                <div className='flex justify-between mx-12 py-7'>
                    <div>
                        <h1 className='text-xl font-bold'>{doctor.name}</h1>
                        <h2 className='text-lg font-semibold'>{doctor.education}</h2>
                    </div>
                    <div>
                        <p className='font-semibold text-gray-400'>Appoinment Fee{doctor.fee}</p>
                    </div>
                </div>
                <div className='mx-12 '>
                    <button onClick={HandleCancel} className='w-full cursor-pointer border-red-500 rounded-full py-2 border-2 text-black hover:bg-red-500 hover:text-white'>Cancel Appoinment</button>
                </div>
                </div>
                
        </div>
    );
};

export default Mybook;