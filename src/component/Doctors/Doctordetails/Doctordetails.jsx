import { BiRegistered } from "react-icons/bi"
import { useLoaderData, useNavigate, useParams } from "react-router"
import { ToastContainer, toast, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Doctordetails = () => {
    const navigate =useNavigate()
    const data = useLoaderData()
    const { id } = useParams()
    const numberId = parseInt(id)

    const Singledata = data?.find(d => d.id === numberId)
    const handleBooking = () => {
        toast.success(`Appointment booked with ${Singledata.name}`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            transition: Bounce
        })

        setTimeout(() => {
            navigate("/booking", { state: Singledata })
        }, 1200)   
    }



    if (!Singledata) {
        return <p className="text-center text-xl">Doctor not found</p>
    }
    console.log(Singledata.image);
    return (
        <div className="">
            <div className='bg-white shadow-xl rounded-xl container mx-auto py-20 mb-7'>
                <h1 className='text-5xl font-bold text-center mb-5'>
                    Doctor Profile Details
                </h1>
                <p className="text-center pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores suscipit veritatis inventore odit eligendi quibusdam totam dolor,<br/> ducimus sequi neque facere, sed dolorem magni animi error quia beatae omnis.</p>
            </div>

            <div className='bg-white shadow-xl rounded-xl container mx-auto  flex gap-10 h-[330px] '>
                <img src={Singledata?.image} className=" rounded-xl h-full" />

                <div className="py-2 space-y-2">
                    <h2 className="text-4xl font-bold">{Singledata.name}</h2>
                    <p>{Singledata.education}</p>
                    <p>{Singledata.speciality}</p>
                    <p>working at</p>
                    <h3 className="font-bold text-lg">{Singledata.workingPlace}</h3>
                    <div className="border-t border-dashed border-gray-400   "></div>
                    <div className='flex items-center gap-2 '>
                                            <BiRegistered className='text-xl'/>
                        <p>{Singledata.registrationNumber}</p>
                    
                                        </div>
                    <div className="border-t border-dashed border-gray-400  "></div>
                    <div className="flex gap-4 mt-3 items-center">
                        <p className="text-md font-semibold">Availiabilty</p>
                        <p className="bg-orange-200 font-semibold text-orange-500 px-10 rounded-full">{Singledata.availability}</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="font-semibold">Consulation Fee  </p>
                        <p className="text-blue-500 font-bold">Taka : {Singledata.fee}</p>
                        <p>(include bat)</p>
                    </div>

                </div>

            </div>


            <div className="bg-white shadow-xl rounded-xl container mx-auto  h-[230px] mt-12 mb-12 ">
                <div className="py-5 ">
                    <h1 className="text-4xl font-bold text-center">Book An Appoinment</h1>
                </div>
                <div className="border-t border-dashed border-gray-400 mx-12"></div>
                <div className="mx-12 flex justify-between py-5">
                    <h1 className="text-xl font-semibold ">Availivilty</h1>
                    <h2 className="bg-green-200 px-6 rounded-full text-green-500 font-bold">Doctor Availabe Today</h2>
                </div>
                <div className="border-t border-dashed border-gray-400 mx-12"></div>

                <div className="mx-12 mt-5">
                    <button onClick={handleBooking} className="w-full bg-blue-500 cursor-pointer hover:bg-blue-800 text-white rounded-full py-1">Book Appoinment Now</button>
                </div>

            </div>
        </div>
    )
}

export default Doctordetails;