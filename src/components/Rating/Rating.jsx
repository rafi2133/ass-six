import React from 'react';

const Rating = () => {
  return (
    <div className="bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] py-10 px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
      <div className="text-center text-white sm:border-r sm:border-white/30 sm:pr-8 md:pr-12 last:border-r-0">
        <h2 className="font-bold text-2xl sm:text-xl">50K+</h2>
        <p className="text-sm sm:text-base">Active Users</p>
      </div>
      <div className="text-center text-white sm:border-r sm:border-white/30 sm:pr-8 md:pr-12 last:border-r-0">
        <h2 className="font-bold text-2xl sm:text-xl">200+</h2>
        <p className="text-sm sm:text-base">Premium Tools</p>
      </div>
      <div className="text-center text-white last:border-r-0">
        <h2 className="font-bold text-2xl sm:text-xl">4.9 <i className="fa-solid fa-star text-yellow-300"></i></h2>
        <p className="text-sm sm:text-base">Rating</p>
      </div>
    </div>
  );
};

export default Rating;