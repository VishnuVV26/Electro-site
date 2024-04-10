
import React from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../ProductsData/all_products'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const BrandDisplayPage = () => {
  const { brandName ,category } = useParams();
  const productsByBrand = allProducts.filter(
    (product) => product.brand.toLowerCase() === brandName.toLowerCase()
  );

  return (
    <div className='mt-5 p-5'>
        <div>
       
        </div>
      <h2 className='text-md font-bold'>Products by {(brandName)}: <span className='text-md font-normal'>Results</span><hr className='mt-1'/></h2>
      <div className='brand-products'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:mt-3 p-6'>
        {productsByBrand.map((product,index) => (
            <div key={index} className='bg-cyan-400 rounded-md p-4 text-slate-700'>
            <img src={product.image} alt={product.name}  className='rounded-md cursor-pointer'/>
            <p className='text-sm font-medium'>{product.desc}</p>
            <p className='text-md font-semibold text-black'>Price: {product.price}</p>
            {/* Add more product details as needed */}
            <div className='flex justify-center mt-2'>
            <button className='text-md font-medium bg-yellow-400 w-28 h-10 text-black rounded-sm hover:bg-white'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  );
};

export default BrandDisplayPage;




