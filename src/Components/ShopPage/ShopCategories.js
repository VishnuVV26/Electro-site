import React from 'react'

const ShopCategories = () => {
    return (
        <div className='bg-cyan-300 my-5'>
            <div className='grid md:grid-cols-4 grid-cols-2 p-5'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png"
                        alt='laptops'
                        className='w-32'
                    />
                    <p className='text-md font-medium'>Laptops</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Headphones._CB574550011_.png"
                        alt='Earphones'
                        className='w-32'
                    />
                    <p className='text-md font-medium'>Earphones</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Wearables._CB574550011_.png"
                        alt='Smartwatches'
                        className='w-32'
                    />
                    <p className='text-md font-medium'>Smart Watches</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Tablets._CB574550011_.png"
                        alt='Tablets'
                        className='w-32'
                    />
                    <p className='text-md font-medium'>Mobiles</p>
                </div>

            </div>
        </div>
    )
}

export default ShopCategories