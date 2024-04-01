    import React, { useEffect, useState } from 'react'
    import mob_banner from '../Images/banner1.jpg'
    import mob_banner2 from '../Images/banner2.jpg'
    import mob_banner3 from '../Images/banner3.jpg'
    import mob_banner4 from '../Images/Banner4.png'
    import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

    const Banner = () => {


        const images=[mob_banner,mob_banner2,mob_banner3,mob_banner4]

const [currentIndex,setCurrentIndex]=useState(0);

const nextSlide=()=>{
    setCurrentIndex(currentIndex===images.length-1 ? 0:currentIndex+1)
}
const prevSlide=()=>{
    setCurrentIndex(currentIndex===0? images.length-1:currentIndex-1)
}


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
}, [currentIndex, images.length]);
    return (
        // Entire Div class
        <div className=''>
    <div className='flex justify-center py-5 md:py-10 relative'>
        {/* Left and right slide buttons */}
        <div className='absolute top-1/2 md:left-20 left-10 transform -translate-y-1/2'>
        <button onClick={prevSlide} className=''><IoIosArrowBack className='md:text-3xl text-xl text-slate-700 hover:text-black' />
</button>
        </div>
        {/* slides of images */}
<div className='absolute top-1/2 md:right-20 right-10 transform -translate-y-1/2'>  <button onClick={nextSlide}><IoIosArrowForward className='md:text-3xl text-xl text-slate-700 hover:text-black' />
</button></div>
    {images.map((image,i)=>(
        <img
        key={i}
        src={image}
        alt={`Banner ${i}`}
        className={`rounded-md ${i===currentIndex?'':'hidden'} md:w-auto w-72 `}
        />
    ))}
  
    </div>
        </div>
    )
    }

    export default Banner



    