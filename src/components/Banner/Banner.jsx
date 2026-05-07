import banner from '../../assets/products/banner.png'

const Banner = () => {
    return (
        <div className=' md:flex text-center my-20 items-center gap-10 justify-center'>
            <div className="">
                <div className="space-y-4">
                    <div className="circle-stack rounded-full bg-[#E1E7FF] px-3">
                        <div className="circles">
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>
                        </div>
                        <p className="text-[#7D50F8] font-semibold ">New: AI-Powered Tools Available</p>
                    </div>

                    <h2 className='font-bold text-4xl'>Supercharge Your <br />Digital Workflow</h2>
                    <p>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                    <button className="btn  rounded-full text-white bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] mr-2">Explore Products</button>
                    <button className="btn text-[#891BFA] bg-transparent rounded-full"><i className="fa-solid fa-play"></i> Watch Demo</button>
                </div>
                {/* <div className=""></div> */}
            </div>
            <div className=" w-80 my-4 mx-auto">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;