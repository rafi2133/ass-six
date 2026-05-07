// import React from 'react';

import { use, useState } from "react";
import Box from "./Box";
import BoxCart from "../Cart/BoxCart";

const Card = ({ dataPromise,setCartBadge,cartBadge  }) => {
    const datas = use(dataPromise)
    const [selectedButton, setSelectedButton] = useState("products");
    const [selectedProducts,setSelectedProducts] = useState([])


    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="space-y-4 text-center">
                <h2 className="text-5xl">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
               <div className="inline-flex rounded-full border overflow-hidden  ">
                 <button onClick={()=>setSelectedButton("products")} className=
                {`btn ${selectedButton==="products" ? "bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white" : "btn bg-white rounded-full "}   rounded-full`}
                >
                    Products
                </button>
                <button onClick={()=>setSelectedButton("cart")} className={`btn ${selectedButton==="cart" ? "bg-gradient-to-r  from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white" : "btn bg-white rounded-full "}   rounded-full`}>Cart ({cartBadge})</button>
               </div>
            </div>
            {/* <div className="mt-4">
                <Box datas={datas} cartBadge={cartBadge} setCartBadge={setCartBadge} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} ></Box>
            </div> */}


            {selectedButton === "products" ?(
                <Box datas={datas} cartBadge={cartBadge} setCartBadge={setCartBadge} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>)
                :(<BoxCart datas={datas} cartBadge={cartBadge} setCartBadge={setCartBadge}  setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>)
            }
        </div>
    );
};

export default Card;