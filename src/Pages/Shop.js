import React from 'react'
import BannerCarousel from '../Components/ShopPage/BannerCarousel'
import ShopCategories from '../Components/ShopPage/ShopCategories'
import AudioCarousel from '../Components/ShopPage/AudioCarousel'
import ShopByAudio from '../Components/ShopByBrands/ShopByAudio'
import { useParams } from 'react-router-dom'
import MobileCarousel from '../Components/Carousels/MobileCarousel'
import ShopByMobBrands from '../Components/ShopByBrands/ShopByMobBrands'

const Shop = () => {

  const {id}=useParams();

  return (
    <div>
      <BannerCarousel/>
      <ShopCategories/>
      <AudioCarousel/>
      <ShopByAudio/>
      <MobileCarousel productId={id}/>
      <ShopByMobBrands/>
    </div>
  )
}

export default Shop