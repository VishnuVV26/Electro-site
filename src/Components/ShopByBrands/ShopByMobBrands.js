import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import {allProducts} from '../../ProductsData/all_products'
const ShopByMobBrands = () => {

    const brands = Array.from(new Set(allProducts.map(product => product.brand)));

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      
  return (
    <div className='p-3 border-2 mt-2 border-l-8 border-r-8'>
        <div>
            <h2 className='text-md font-semibold'>
                Explore Top Mobile Brands
            </h2>
        </div>
        <div className='mt-4'>
        <Carousel responsive={responsive}>
        {brands.map((brand) => (
          <div key={brand}>
            <Link to={`/products/brands/${brand}`}>{brand}</Link>
          </div>
        ))}
      </Carousel>
        </div>
    </div>
  )
}

export default ShopByMobBrands