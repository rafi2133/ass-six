import ProductCard from "./ProductCard";

const Box = ({ datas,setCartBadge,cartBadge,setSelectedProducts, selectedProducts }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {datas.map((data, ind) => <ProductCard key={ind} data={data} cartBadge={cartBadge} setCartBadge={setCartBadge} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>)}
    </div>
  );
};
export default Box;