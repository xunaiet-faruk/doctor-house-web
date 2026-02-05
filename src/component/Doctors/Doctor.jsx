import React from 'react';
import { BiRegistered } from 'react-icons/bi';

const Doctor = ({ doctor }) => {
    const { id, name, image, education, speciality, experience, registrationNumber } =doctor;
    return (
        <div>

            <div className="card bg-base-100  mx-7 shadow-xl hover:shadow-blue-200">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex gap-4 py-5 px-5'>

                    <h3 className='bg-green-200 px-6 py-1 text-green-500 font-semibold rounded-full'>Available</h3>
                    <h3 className='bg-blue-200 px-6 font-semibold text-blue-600 py-1 rounded-full'>{experience}</h3>

                </div>
                <div className="card-body -mt-7">
                    <h3 className='font-semibold text-xl'>{name}</h3>
                    <p>{education}</p>
                    <div className="border-t border-dashed border-gray-400  h-[15px] "></div>
                    <div className='flex items-center gap-2 mt-1'>
                        <BiRegistered className='text-xl'/>
                        <p>{registrationNumber}</p>

                    </div>
                    <div className="">
                        <button className='border-2 border-blue-500 w-full py-2 rounded-xl text-blue-500 font-bold hover:bg-blue-500 hover:text-white'>View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Doctor;