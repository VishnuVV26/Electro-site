import React, { useState } from 'react'
import ProductDetails from '../Components/Product/ProductDetails'
import { useParams } from 'react-router-dom'
import BreadCum from '../Components/Breadcum.js/BreadCum';

const ProductDisplay = () => {

const {id}=useParams();


  return (
    <div>
      <BreadCum productId={id}/>
        <ProductDetails productId={id}/>
    </div>
  )
}

export default ProductDisplay