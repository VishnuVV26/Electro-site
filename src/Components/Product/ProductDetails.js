import React from 'react'
import { allProducts } from '../../ProductsData/all_products'
import Review from '../Reviews/Review'

const ProductDetails = ({ productId}) => {
    const product = allProducts.find(item => item.id === parseInt(productId))

    // Product different view images
    const imageArray = Array.from({ length: 4 }, (_, index) => (
        <div key={index} className='border'>
            <img src={product.image} alt='product_image' className='w-20 cursor-pointer hover:outline' />
        </div>
    ))

    const imageColor = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className='border'>
            <img src={product.image} alt='Product_colorImage' className='w-6 md:w-10 lg:w-10 hover:outline outline-yellow-600 cursor-pointer' />
        </div>
    ))

    return (
        // Whole div container
        <div className='mt-4 flex flex-col md:flex-row lg:flex-row  gap-16'>
            {/* Left Side of the page */}
            <div className='flex'>
                <div className='flex flex-col gap-1 p-4'>
                    {imageArray}
                </div>
                <div>
                    <img src={product.image} alt='product_image' className='w-96' />
                </div>
            </div>
            {/* Right side of the page */}
            <div className='md:mt-10 mt-2 md:max-w-[450px] p-3 md:p-0'>
                <h2 className='text-sm md:text-2xl font-sans font-medium text-slate-800 text-left'>{product.desc}</h2>
                <Review stars={product.stars} reviews={product.reviews} />
                <p className='text-sm font-medium'>({product.stars}) ratings</p>
                <p className='text-2xl font-medium'><span className='text-sm font-medium'>₹</span>{product.price}</p>
                <p className='text-sm font-normal'>Inclusive of all taxes</p>
                <hr className='mt-2' />
                {/* Warranty,brand */}
                <div className='flex gap-10 mt-2 p-2'>
                    <div className='items-center justify-center flex flex-col'>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                            alt='' className='w-6 md:w-8 cursor-pointer' />
                        <p className='text-[10px] mt-1 text-blue-500 font-normal cursor-pointer'>Returns Policy</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                            alt='' className='w-6 md:w-8 cursor-pointer' />
                        <p className='text-[10px] mt-1 text-blue-500 font-normal cursor-pointer'>1 Year Warranty</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
                            alt='' className='w-6 md:w-8 cursor-pointer' />
                        <p className='text-[10px] mt-1 text-blue-500 font-normal cursor-pointer'>Top Brand</p>
                    </div>
                </div>
                <hr />
                {/* Product Color selection */}
                <div className='mt-4'>
                    <h2 className='text-sm font-medium'><span className='text-slate-500'>Color :</span> {product.color}</h2>
                    <div className='flex gap-1 mt-1'>
                        {imageColor}
                    </div>
                    <h2 className='text-sm font-medium mt-2'><span className='text-slate-500'>Size :</span> {product.size}+{product.storage}</h2>
                </div>
                {/* Product brand,color,size and cellular details */}
                <div className='mt-5 container flex flex-col'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-semibold'>Brand</p>
                            <p className='text-sm font-semibold'>Color</p>

                            {/* Dynamic chnage for fields depends user selection */}

                            {(product.category === 'Watch' || product.category === "EarPhones") &&
                                (
                                    <p className='text-sm font-semibold'>Type</p>
                                )}
                            {(product.category === 'Laptop' || product.category === 'Mobile') &&
                                (
                                    <p className='text-sm font-semibold'>Size</p>
                                )}
                            {product.category === 'Laptop' &&
                                (
                                    <p className='text-sm font-semibold'>Hard Disk</p>
                                )}
                            {product.category === 'Mobile' &&
                                (
                                    <p className='text-sm font-semibold'>Cellular Technology</p>
                                )}
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-normal'>{product.brand}</p>
                            <p className='text-sm font-normal'>{product.color}</p>
                            {/* Dynamic chnage for fields depends user selection */}

                            {(product.category === "Watch" || product.category === "EarPhones") && (
                                <p className='text-sm font-normal'>{product.product}</p>
                            )}

                            {(product.category === "Laptop" || product.category === "Mobile") && (
                                <p className='text-sm font-normal'>{product.size}</p>
                            )}

                            {product.category === "Laptop" && (
                                <p className='text-sm font-normal'>{product.storage}</p>
                            )}
                            {product.category === "Mobile" && (
                                <p className='text-sm font-normal'>{product.cellular}</p>
                            )}

                        </div>
                    </div>
                    <hr className='my-2' />
                    {/* Product Description */}
                    <div className='my-1'>
                        <h2 className='text-sm font-medium text-slate-800'>About this item</h2>
                        <div className='mt-2 text-sm font-normal border p-1 md:p-3 bg-slate-100'>
                            {product.desc}
                        </div>
                    </div>
                    {/* Add to Cart button */}
                    <div className='my-4 flex justify-center'>
                        <button  className='bg-yellow-500 w-24 h-8 text-white text-sm font-medium hover:bg-slate-100 hover:text-black'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails