import React from 'react'
import { allProducts } from '../../ProductsData/all_products'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const MobileCarousel = () => {

    // For page open at top of the screen
    const handleClick=()=>{
        window.scroll(0,0);
      }

    const MobilesPremium=allProducts.filter(product=>product.category==='Mobile' && product.product==='premium');

// page Responsive 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='p-3 border-2 mt-2 border-l-8 border-r-8'>
        <div>
            <h2 className='text-md font-semibold'>
                Explore Top Mobile Brands
            </h2>
        </div>
    <div className='p-5'>
<Carousel responsive={responsive}>
{MobilesPremium.map(product => (
          <div onClick={handleClick} key={product.id} className='max-w-48 h-72 p-3 bg-cyan-500 rounded-md'>
         <Link to={`/products/${product.id}`}>
         <img src={product.image} alt={product.name} className='w-44 rounded-md' />
            <div className='text-md font-semibold mt-1 hover:text-slate-100'>{product.name}</div></Link>   
          </div>
        ))}
</Carousel>
    </div>
    </div>
  )
}

export default MobileCarousel