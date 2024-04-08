import React from 'react'
import BannerCarousel from '../Components/ShopPage/BannerCarousel'
import ShopCategories from '../Components/ShopPage/ShopCategories'
import AudioCarousel from '../Components/ShopPage/AudioCarousel'
import ShopByAudio from '../Components/ShopByBrands/ShopByAudio'

const Shop = () => {
  return (
    <div>
      <BannerCarousel/>
      <ShopCategories/>
      <AudioCarousel/>
      <ShopByAudio/>
    </div>
  )
}

export default Shop