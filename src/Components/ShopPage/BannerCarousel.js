import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Images=[
    {image:"Image_1",path:"https://m.media-amazon.com/images/G/31/img23/BAU-April/LaptopsDays/LapDays_Header_1500._CB561772140_.jpg"},
    {image:"Image_2",path:"https://m.media-amazon.com/images/G/31/img23/BAU-Mar/Laptops_Brands-COOP/Dell_Vostrro12thGen_1500._CB580172752_.jpg"},
    {image:"Image_3",path:"https://m.media-amazon.com/images/G/31/img24/dell/alieanware/prebooking/v1/AW_m16r2_1500X300-new._CB561801746_.jpg"},
    {image:"Image_4",path:"https://m.media-amazon.com/images/G/31/img24hp/boAt/Eutopia/sale/1500x300._CB561377478_.jpg"},
    {image:"Image_5",path:"https://m.media-amazon.com/images/G/31/img24hp/booat/ne/1500_300._CB579806819_.jpg"},
    {image:"Image_6",path:"https://m.media-amazon.com/images/G/31/img24hp/SOUND/Soundbardays_Banner_1500x300._CB561615008_.jpg"}

]

const items = Images.map((item)=>(
   <div className='p-5'> <img src={item.path} alt={item.image}
   className='rounded-md cursor-pointer'
    />
    </div>
))

const BannerCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default BannerCarousel