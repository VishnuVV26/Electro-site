import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const AudioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Images = [
    { image: "Image_1", path: "https://m.media-amazon.com/images/G/31/img24hp/jbbll/978-X-900-CATEGORY--JBL-IPL-SET-2._CB561993406_.gif" },
    { image: "Image_2", path: "https://m.media-amazon.com/images/G/31/img24hp/26th/feb/K40-_Audio_978x900_1._CB581856169_.gif" },
    // { image: "Image_3", path: "https://m.media-amazon.com/images/G/31/img22/WLA/2024/Launches24/Mivi/i7/Sale/D121140996_978x900_new._SS900_QL85_.jpg" },
    { image: "Image_4", path: "https://m.media-amazon.com/images/G/31/img24hp/booat/978x900._CB579815857_.gif" },
    { image: "Image_5", path: "https://m.media-amazon.com/images/G/31/img24hp/18th/mar/978x900._CB579376894_.gif" },
    { image: "Image_6", path: "https://m.media-amazon.com/images/G/31/img24hp/boult/978x900cs_1._CB579684042_.gif" },
    { image: "Image_7", path: "https://m.media-amazon.com/images/G/31/img24hp/boAt/13th/march/978x900._CB579041291_.gif" },
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 3 < Images.length ? prev +1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 3 >=0 ? prev-1 : Images.length-3));
  };


  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex(prev=>(prev +3 <Images.length ? prev + 3 : 0));
    },3000);

    return()=>clearInterval(interval);
  },[currentIndex,Images.length])

  return (
    <div className='flex md:flex-row flex-col gap-2 md:gap-0 justify-center py-5 md:py-10 border-solid border-2 border-b-[22px] border-slate-200'>
      <div className='flex md:items-start md:justify-start md:mr-20 justify-center items-center'>
        <h2 className='text-md font-semibold'>New & Trending Audio</h2>
      </div>
    <div className='flex items-center relative'>
      <button onClick={prevSlide} className='md:text-3xl text-xl text-slate-700 hover:text-black absolute top-12 md:left-0 left-6 md:top-32'>
        <IoIosArrowBack />
      </button>
    </div>
    <div className='flex gap-2 justify-center md:justify-normal'>
    {Images.slice(currentIndex,currentIndex + 3).map((image, i) => (
      <img
        key={i}
        src={image.path}
        alt={`Banner ${i}`}
        className={` md:w-72 w-24 cursor-pointer rounded-md`}
      />
    ))}
    </div>
   
    <div className='flex items-center relative'>
      <button onClick={nextSlide} className='md:text-3xl text-xl text-slate-700 hover:text-black absolute md:right-0 right-6  bottom-10 md:bottom-28'>
        <IoIosArrowForward />
      </button>
    </div>
  </div>
  );
};

export default AudioCarousel;
