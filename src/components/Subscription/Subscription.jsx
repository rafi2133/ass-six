import { FaCheck } from "react-icons/fa";

const Subscription = () => {
    return (
        <div className="w-10/12 mx-auto mb-20">
            <div className="">
                <h2 className="font-bold text-5xl text-center">Simple, Transparent Pricing</h2>
                <p className="text-center my-4">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-4 mt-10">
                <div className="py-6 px-6 border rounded-xl bg-[#F9FAFC] flex flex-col h-full">
                    <h2 className="font-bold text-xl mb-4">Starter</h2>
                    <p className="my-4">Perfect for getting started</p>
                    <h2 className="font-bold text-3xl">$0 <span className="font-normal text-xl">/Month</span></h2>
                    <ul className="mb-20 flex-1">
                        <li className="flex items-center gap-2"><FaCheck className="text-green-500"></FaCheck> Access to 10 free tools</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Basic templates</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Community support</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> 1 project per month</li>
                    </ul>
                    <button className=" bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white btn w-full rounded-full">Get Started Free</button>
                </div>
                <div className="py-6 px-6 border rounded-xl bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white relative z-3 flex flex-col h-full">
                    <div className="absolute z-5 -top-4 left-1/2 -translate-x-1/2"><p className="text-[#BB4D00] bg-[#FEF3C6] p-1 rounded-3xl ">Most Popular</p></div>
                    <h2 className="font-bold text-xl mb-4">Pro</h2>
                    <p className="my-4">Best for professionals</p>
                    <h2 className="font-bold text-3xl">$29 <span className="font-normal text-xl">/Month</span></h2>
                    <ul className="mb-20 flex-1">
                        <li className="flex items-center gap-2"><FaCheck className=""></FaCheck> Access to all premium tools</li>
                        <li className="flex items-center gap-2 "><FaCheck className=""></FaCheck> Unlimited templates</li>
                        <li className="flex items-center gap-2 "><FaCheck className=""></FaCheck> Priority support</li>
                        <li className="flex items-center gap-2 "><FaCheck className=""></FaCheck> Unlimited projects</li>
                        <li className="flex items-center gap-2 "><FaCheck className=""></FaCheck> Cloud sync</li>
                        <li className="flex items-center gap-2 "><FaCheck className=""></FaCheck> Advanced analytics</li>
                    </ul>
                    <button className="bg-white w-full rounded-full py-2 px-4 font-semibold">
                        <span className="bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] bg-clip-text text-transparent">
                            Get Started Free
                        </span>
                    </button>


                </div>
                <div className="py-6 px-6 border rounded-xl bg-[#F9FAFC] flex flex-col h-full">
                    <h2 className="font-bold text-xl mb-4">Enterprise</h2>
                    <p className="my-4">For teams and businesses</p>
                    <h2 className="font-bold text-3xl">$99 <span className="font-normal text-xl">/Month</span></h2>
                    <ul className="mb-20 flex-1">
                        <li className="flex items-center gap-2"><FaCheck className="text-green-500"></FaCheck> Everything in Pro</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Team collaboration</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Custom integrations</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Dedicated support</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> SLA guarantee</li>
                        <li className="flex items-center gap-2 "><FaCheck className="text-green-500"></FaCheck> Custom branding</li>
                    </ul>
                    <button className=" bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white  btn w-full rounded-full">Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;