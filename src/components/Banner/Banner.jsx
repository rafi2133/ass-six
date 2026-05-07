import banner from '../../assets/products/banner.png'

const Banner = () => {
    return (
        <div className=' flex my-20 items-center justify-center flex-col md:flex-row gap-6 md:gap-10'>
            <div className="text-center ">
                <div className="text-center w-full md:w-auto max-w-lg px-4">
                    <div className="circle-stack rounded-full bg-[#E1E7FF] my-4 px-3">
                        <div className="circles">
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>
                        </div>
                        <p className="text-[#7D50F8] font-semibold ">New: AI-Powered Tools Available</p>
                    </div>

                    <h2 className='font-bold text-4xl'>Supercharge Your <br />Digital Workflow</h2>
                    <p className='my-4'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                    <button className="btn  rounded-full text-white bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] mr-2">Explore Products</button>
                    <button className="btn text-[#891BFA] bg-transparent rounded-full"><i className="fa-solid fa-play"></i> Watch Demo</button>
                </div>
                {/* <div className=""></div> */}
            </div>
            <div className=" w-80 hidden md:block">
                <img className='hidden sm:flex' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;