    import React from 'react'
import { allProducts } from '../../ProductsData/all_products'

    const ProductDetails = ({productId}) => {
        const product=allProducts.find(item=>item.id===parseInt(productId))
    return (
        <div>
            <div>

    <h2>{product.desc}</h2>
    
            </div>
            <div>

            </div>
        </div>
    )
    }

    export default ProductDetails