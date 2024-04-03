import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import mob_banner from '../Images/banner1.jpg';
import mob_banner2 from '../Images/banner2.jpg';
import mob_banner3 from '../Images/banner3.jpg';
import mob_banner4 from '../Images/Banner4.png';

const Banner = () => {
  const images = [mob_banner, mob_banner2, mob_banner3, mob_banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className='flex justify-center py-5 md:py-10'>
      <div className='flex items-center'>
        <button onClick={prevSlide} className='md:text-3xl text-xl text-slate-700 hover:text-black'>
          <IoIosArrowBack />
        </button>
      </div>
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Banner ${i}`}
          className={`rounded-md ${i === currentIndex ? '' : 'hidden'} md:w-auto w-72`}
        />
      ))}
      <div className='flex items-center'>
        <button onClick={nextSlide} className='md:text-3xl text-xl text-slate-700 hover:text-black'>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Banner;
