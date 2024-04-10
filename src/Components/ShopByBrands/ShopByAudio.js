import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { allProducts } from '../../ProductsData/all_products';

const ShopByAudio = () => {
  const AudioBrands = allProducts.filter(product => product.category === 'EarPhones');
  const brands = Array.from(new Set(AudioBrands.map(product => product.brand)));

  const responsive = {
    superLargeDesktop: {
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
        <h2 className='text-md font-semibold'>Explore Top Audio Brands</h2>
      </div>
      <div className='mt-4'>
        <Carousel responsive={responsive}>
          {brands.map((brand, index) => (
            <Link to={`/products/brands/${brand.toLowerCase()}`} key={index}>
              <img
                src={`https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/${brand.toLowerCase()}._SS300_QL85_FMpng_.png`}
                alt={brand}
                className='w-40 cursor-pointer'
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ShopByAudio;
