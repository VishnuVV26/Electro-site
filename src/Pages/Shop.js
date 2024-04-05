import React from 'react'
import BannerCarousel from '../Components/ShopPage/BannerCarousel'
import ShopCategories from '../Components/ShopPage/ShopCategories'
import AudioCarousel from '../Components/ShopPage/AudioCarousel'

const Shop = () => {
  return (
    <div>
      <BannerCarousel/>
      <ShopCategories/>
      <AudioCarousel/>
    </div>
  )
}

export default Shop