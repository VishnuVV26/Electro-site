import React from 'react'
import { Link } from 'react-router-dom'
import { allProducts } from '../../ProductsData/all_products'
import Review from '../Reviews/Review'
const LatestMobiles = () => {

const premiumMobiles=allProducts.filter(item=>item.category==="Mobile" && item.product==="premium")
const handleClick=()=>{
  window.scroll(0,0);
}

  return (
    // Whole div Container
    <div className='flex flex-col justify-center items-center'>
      {/* Heading  */}
      <div className='bg-slate-300 w-2/3  flex justify-center md:h-24 h-14 rounded-bl-full rounded-tr-full items-center text-cyan-600'>
        <h1 className='md:text-5xl text-2xl font-serif'>Latest Mobiles
        </h1>
      </div>
      {/* Products display in grid format */}
      <div className='latest-mobile'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3 md:mt-6 p-6'>
          {premiumMobiles.map((item, index) => (
            <div key={index} className='bg-slate-200 rounded-md p-4 text-slate-600'>
              <div onClick={handleClick}>
              <Link to={`/products/${item.id}`}>
              <img src={item.image} alt='mobile' className='w-96 rounded-md mb-2' />
              <h2 className='text-sm font-semibold text-cyan-600 hover:text-black'>{item.desc}</h2>
              </Link>
              </div>
              <p className='font-medium'>{item.cellular}</p>
              <p className='text-sm font-medium'>RAM: {item.size}</p>
              <p className='font-medium'>Storage: {item.storage}</p>
              <p className='font-bold text-xl'><span className='font-normal'>₹ </span>{item.price}</p>
              <p className='text-slate-800 text-sm'>M.R.P :<span className='text-slate-800 line-through'>₹ {item.mrp}</span></p>
              <Review stars={item.stars}/>
              <p className='text-sm font-medium'>({item.stars})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestMobiles