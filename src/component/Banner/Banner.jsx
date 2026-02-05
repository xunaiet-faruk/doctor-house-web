

const Banner = () => {
    return (
        <div className="container mx-auto pb-12 mb-32 rounded-2xl shadow-2xl bg-gray-50">
           <div>
                <div className="text-center pt-20">
                    <h1 className="text-6xl font-bold">Dependable Care, Backed by Trusted<br/> Professionals.</h1>
                    <p className="py-5">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's<br/> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <input type="text" name="" placeholder="Search Any Doctor" id="" className=" w-[640px] bg-white border-b shadow-2xl p-3 rounded-full"/>
                    <button className="btn bg-blue-500 text-white rounded-full py-6 font-bold">Search Now</button>
                </div>

                <div className="flex justify-center items-center pt-12 gap-6">
                    <img src="/public/Frame 8.png" alt="" />
                    <img src="/public/Frame 8.png" alt="" />
                </div>
           </div>
        </div>
    );
};

export default Banner;