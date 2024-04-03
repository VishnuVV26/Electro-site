import React from 'react'
import { allProducts } from '../../ProductsData/all_products'
import { Link } from 'react-router-dom'
import Review from '../Reviews/Review'
const LatestLap = () => {

  const premiumLaps = allProducts.filter(item => item.category === "Laptop" && item.product === "premium")
  
  const handleClick=()=>{
    window.scroll(0,0);
  }

  return (
    // Entire div container
    <div className='mt-5 flex flex-col justify-center items-center'>
      {/* Heading */}
      <div className='bg-slate-300 w-2/3  flex justify-center md:h-24 h-14 rounded-bl-full rounded-tr-full items-center text-cyan-600'>
        <h1 className='md:text-5xl text-2xl font-serif'>Latest Laptops
        </h1>
      </div>
      {/* Products display div */}
      <div className='latest-laptops'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-3 gap-2 md:mt-6 p-6'>
          {premiumLaps.map((laptop, index) => (
            <div key={index} className='p-4 rounded-md bg-slate-200'>
              <div onClick={handleClick}>
              <Link to={`/products/${laptop.id}`}><img src={laptop.image} alt='lap-image1' className='mb-2 rounded-lg' />
                <h2 className='text-sm text-cyan-700 font-medium hover:text-black'>{laptop.desc}.</h2></Link>
                </div>
              <p className='text-slate-800 text-sm font-normal'>RAM :{laptop.size}</p>
              <p className='text-slate-800 text-sm font-normal'>Hard Disk :{laptop.storage}</p>
              <p className='text-slate9800 font-medium text-md'><span className='font-normal'>₹ </span>{laptop.price}</p>
              <p className='text-slate-800 text-sm'>M.R.P :<span className='text-slate-800 line-through'>₹{laptop.mrp}</span></p>
              <Review stars={laptop.stars}/>
              <p className='text-sm font-medium'>({laptop.stars})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestLap