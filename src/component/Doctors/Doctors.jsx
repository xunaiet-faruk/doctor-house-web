import { useEffect, useState } from "react";
import Doctor from "./Doctor";


const Doctors = () => {
    const [doctors,setDoctors]=useState([])

    useEffect(()=>{

        fetch('./Doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))

    },[])
    return (
        <div>
           <div>
            <div className="text-center mb-20">
                    <h1 className="text-6xl font-bold pb-3">Our Best Doctors</h1>
                    <p className="text-black">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br/>a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-10">
                {
                    doctors.map(doctor =><Doctor doctor={doctor}></Doctor>)
                }
            </div>

           </div>
        </div>
    );
};

export default Doctors;