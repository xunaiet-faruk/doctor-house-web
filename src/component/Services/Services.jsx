import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaArrowsDownToPeople, FaPeopleGroup } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,   
        threshold: 0.3      
    });

    return (
        <div className="mb-32">
            <div className="mb-12">
                <h1 className="text-5xl font-bold text-center">
                    We Provide Best Medical Services
                </h1>
                <p className="text-center pt-1">
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>
            </div>

            <div className="container mx-auto flex justify-center items-center gap-20">

                {/* Doctors */}
                <div ref={ref} className="bg-white shadow-2xl rounded-2xl py-12 px-12">
                    <TfiWrite className="text-4xl text-red-500" />
                    <p className="text-5xl font-bold mt-2">
                        {inView && <CountUp end={290} duration={5} />}+
                    </p>
                    <h3 className="text-xl text-gray-300 mt-2">Total Doctor</h3>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl py-12 px-12">
                    <IoStarSharp className="text-4xl text-yellow-500" />
                    <p className="text-5xl font-bold mt-2">
                        {inView && <CountUp end={190} duration={5} />}+
                    </p>
                    <h3 className="text-xl text-gray-300 mt-2">Total Review</h3>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl py-12 px-12">
                    <FaArrowsDownToPeople className="text-4xl text-blue-500" />
                    <p className="text-5xl font-bold mt-2">
                        {inView && <CountUp end={320} duration={5} />}+
                    </p>
                    <h3 className="text-xl text-gray-300 mt-2">Patients</h3>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl py-12 px-12">
                    <FaPeopleGroup className="text-4xl text-green-500" />
                    <p className="text-5xl font-bold mt-2">
                        {inView && <CountUp end={120} duration={5} />}+
                    </p>
                    <h3 className="text-xl text-gray-300 mt-2">Total Staffs</h3>
                </div>

            </div>
        </div>
    );
};

export default Services;
