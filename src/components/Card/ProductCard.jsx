import { useState } from "react";
import Badge from "./Badge";
import BoxFeature from "./BoxFeature";
import { FaCheck } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";


const ProductCard = ({ data, setCartBadge,cartBadge, setSelectedProducts, selectedProducts}) => {

    const [isBuyed, setIsBuyed] = useState(false);
    
    const handleBuy = () => {
        setIsBuyed(true);
        if(isBuyed){
            toast.warning("Your Product is Ready for CheckOut ",{position: "top-center",theme: "dark",});
            return
        }
        toast.success(`${data.title} is added to cart`,{theme: "dark"})
        setCartBadge(cartBadge+1);
        setSelectedProducts([...selectedProducts,data])
    }


    return (
        <div className="rounded-xl shadow-xl p-4 my-8 border space-y-5">
            <div className="flex justify-between">
                <img src={data.image} alt="" />
                <div><Badge name={data.badge} /></div>
            </div>
            <h2 className='text-xl font-semibold'>{data.title}</h2>
            <p>{data.description}</p>
            <h2 className='text-xl font-semibold'>{data.price}</h2>
            {data.features.map((feature, idx) => <BoxFeature key={idx} feature={feature} />)}
            <button
                onClick={handleBuy}
                className={`
    rounded-full w-full text-xl btn
    ${!isBuyed
                        ? "text-white bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8]"
                        : "bg-[#5cc43d] text-[#fff] hover:bg-[#6adf47] "
                    }
  `}
            >
                {!isBuyed ? "Buy Now" : (
                    <>
                        <FaCheck /> Added to Cart!<CiShoppingCart />
                    </>
                )}
            </button>
        </div>
    );
};

export default ProductCard;