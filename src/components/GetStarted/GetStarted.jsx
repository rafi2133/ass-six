import user from '../../assets/products/user.png'
import packageBox from '../../assets/products/package.png'
import rocket from '../../assets/products/rocket.png'
const GetStarted = () => {
    return (
        <div className="w-10/12 mx-auto mb-20">
            <div className="">
                <h2 className="font-bold text-5xl text-center">Get Started in 3 Steps</h2>
                <p className="text-center mt-5">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
                <div className="border  p-4 text-center space-y-4 rounded-xl mt-5 py-10 relative">
                    <div className="w-7 h-7 rounded-full absolute z-5 bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white flex items-center justify-center text-[10px] font-bold top-4 right-4">
                        01
                    </div>
                    <div className="inline-flex rounded-full p-3 bg-[#F0EAFE]">
                        <img src={user} alt="" />
                    </div>
                    <h2 className='font-semibold text-xl'>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className="border p-5 text-center space-y-4 rounded-xl mt-5 py-10 relative">
                     <div className="w-7 h-7 rounded-full absolute z-5 bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white flex items-center justify-center text-[10px] font-bold right-4 top-4">
                        02
                    </div>
                    <div className="inline-flex rounded-full p-3  bg-[#F0EAFE]">
                        <img src={packageBox} alt="" />
                    </div>
                    <h2 className='font-semibold text-xl'>Choose Products</h2>
                    <p>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className="border p-4 text-center space-y-4 rounded-xl mt-5 py-10 relative">
                     <div className="w-7 h-7 rounded-full absolute z-5 bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white flex items-center justify-center text-[10px] font-bold right-4 top-4">
                        03
                    </div>
                    <div className="inline-flex rounded-full p-3  bg-[#F0EAFE]">
                        <img src={rocket} alt="" />
                    </div>
                    <h2 className='font-semibold text-xl'>Start Creating</h2>
                    <p>Download and start using your premium <br /> tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;