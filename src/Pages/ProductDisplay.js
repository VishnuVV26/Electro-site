import React from 'react'
import ProductDetails from '../Components/Product/ProductDetails'
import { useParams } from 'react-router-dom'

const ProductDisplay = () => {

const {id}=useParams();

  return (
    <div>
        <ProductDetails productId={id}/>
    </div>
  )
}

export default ProductDisplay