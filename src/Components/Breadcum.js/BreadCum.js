import React from 'react'
import { HiHome } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { allProducts } from '../../ProductsData/all_products';
const BreadCum = ({productId}) => {

    const product=allProducts.find(item=>item.id===parseInt(productId))

  return (
    <div className='mt-5 p-3'>
        <div className='flex text-xs md:text-sm font-medium'>
        <HiHome className='text-xl cursor-pointer' />
        <MdKeyboardDoubleArrowRight className='text-xl' />
        <p className='cursor-pointer'>Products</p>
        <MdKeyboardDoubleArrowRight className='text-xl' />
        <p className='cursor-pointer'>{product.category} </p> 
        <MdKeyboardDoubleArrowRight className='text-xl' />
        <p className='cursor-pointer'>{product.brand}</p>
        <MdKeyboardDoubleArrowRight className='text-xl' />
        <p className='cursor-pointer'>{product.name}</p>

        </div>
    </div>
  )
}

export default BreadCum