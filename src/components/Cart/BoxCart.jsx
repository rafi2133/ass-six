import { toast } from "react-toastify";

const BoxCart = ({ setSelectedProducts, selectedProducts,  setCartBadge }) => {
  const total = selectedProducts.reduce((sum, product) => {
    const priceNumber = parseFloat(product.price.replace(/[^0-9.-]/g, ''));
    return sum + priceNumber;
  }, 0);

  const handleRemove = (product) => {
    const filteredProducts = selectedProducts.filter(
      selectedProduct => selectedProduct.title !== product.title
    );
    toast.info("The Product has been removed!", { theme: 'dark' });
    setSelectedProducts(filteredProducts);
    setCartBadge(filteredProducts.length); 
  };

  const handleProceed = () => {
    setSelectedProducts([]);
    setCartBadge(0);
    toast.success("Payment Successful, Have a Good Day");
  };

  return (
    <div className='border rounded-lg my-10 p-4 gap-4'>
     {selectedProducts.length === 0? "": <h2>Your products <i className="fa-solid fa-cart-arrow-down"></i></h2>}

      {selectedProducts.length === 0 ? (
        <div className="text-center py-10">
          <i className="fa-solid fa-cart-shopping text-6xl text-gray-300 mb-4"></i>
          <p className="text-gray-400">Taka Thakle Kin Nahole Bajaw Bin</p>
        </div>
      ) : (
        <>
          {selectedProducts.map((product, ind) => (
            <div key={ind} className="flex bg-[#F9FAFC] justify-between border p-4 rounded-lg mt-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex bg-white rounded-full p-3">
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.price}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(product)} className="btn border-none bg-transparent text-[#FE5190]">
                Remove
              </button>
            </div>
          ))}
          <div className="flex my-4 justify-between bg-[#F9FAFC] border py-1 px-4 rounded-lg">
            <h2 className="font-bold">Total:</h2>
            <p className="font-bold">${total}</p>
          </div>
          <button onClick={handleProceed} className="btn w-full bg-gradient-to-r from-[#561774] via-[#9c3bdd] to-[#df60f8] text-white">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default BoxCart;