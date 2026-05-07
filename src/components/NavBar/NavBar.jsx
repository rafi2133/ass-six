// import React from 'react';

const NavBar = ({cartBadge}) => {
    return (
        <div className='w-12/12 mx-auto'>
            <div className="flex justify-between navbar bg-base-100 shadow-sm">
                <a href='' className=" text-2xl text-[#7427e0]">DigiTools</a>
                <div className="">
                    <ul className='flex gap-3 font-bold'>
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="space-x-1">
                    <div  className="relative inline-block mr-1 ">
                        <button><i className="fa-solid fa-cart-shopping text-xl"></i></button>
                        <div className={`
                            ${
                                cartBadge === 0 
                                ?"hidden "
                                :"absolute -top-3 -right-1 z-5 text-white bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold"
                            }`}>
                           {cartBadge}
                        </div>
                    </div>
                    <button className='btn btn-xs font-bold'>Login</button>
                    <button className='btn text-white font-bold bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] rounded-full'>Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default NavBar;