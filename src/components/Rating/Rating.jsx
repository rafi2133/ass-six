// import React from 'react';

const Rating = () => {
    return (
        <div className='bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] flex p-10 gap-10 justify-center'>
            <div className="text-center text-white border-r-4 pr-6">
                <h2 className="font-bold text-xl">50K+</h2>
                <p>Active Users</p>
            </div>
            <div className="text-center text-white border-r-4 pr-6">
                <h2 className="font-bold text-xl">200+</h2>
                <p>Premium Tools</p>
            </div>
            <div className="text-center text-white">
                <h2 className="font-bold text-xl">4.9<i className="fa-regular fa-star"></i></h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;