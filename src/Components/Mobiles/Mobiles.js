import React from 'react'
import {latestMobiles} from '../Mobiles/LatestMobilesData.js'
const Mobiles = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-slate-300 w-2/3  flex justify-center md:h-24 h-14 rounded-bl-full rounded-tr-full items-center text-cyan-600'>     
       <h1 className='md:text-5xl text-2xl font-serif'>Latest Mobiles
      </h1>
</div>
        <div className='latest-mobile'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 md:mt-6 p-6'>
        {latestMobiles.map((item, index) => (
          <div key={index} className='bg-slate-200 rounded-md p-4 w-72 h-[450px] text-slate-600'>
            <img src={item.image} alt='mobile' className='w-96 rounded-md mb-2'/>
            <h2 className='text-2xl font-semibold text-cyan-600'>{item.name}</h2>
            <p className='font-medium'>{item.cellular}</p>
            <p className='text-sm font-medium'>RAM: {item.size}</p>
            <p className='font-medium'>Storage: {item.storage}</p>
            <p className='font-bold text-xl'><span className='font-normal'>₹ </span>{item.price}</p>
          </div>
        ))}
      </div>  
        </div>
    </div>
  )
}

export default Mobiles