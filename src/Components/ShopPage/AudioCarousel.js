import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AudioCarousel = () => {
  

  const Images = [
    { image: "Image_1", path: "https://m.media-amazon.com/images/G/31/img24hp/jbbll/978-X-900-CATEGORY--JBL-IPL-SET-2._CB561993406_.gif" },
    { image: "Image_2", path: "https://m.media-amazon.com/images/G/31/img24hp/26th/feb/K40-_Audio_978x900_1._CB581856169_.gif" },
    { image: "Image_3", path: "https://m.media-amazon.com/images/G/31/img22/WLA/2024/Launches24/Mivi/i7/Sale/D121140996_978x900_new._SS900_QL85_.jpg" },
    { image: "Image_4", path: "https://m.media-amazon.com/images/G/31/img24hp/booat/978x900._CB579815857_.gif" },
    { image: "Image_5", path: "https://m.media-amazon.com/images/G/31/img24hp/18th/mar/978x900._CB579376894_.gif" },
    { image: "Image_6", path: "https://m.media-amazon.com/images/G/31/img24hp/boult/978x900cs_1._CB579684042_.gif" },
    { image: "Image_7", path: "https://m.media-amazon.com/images/G/31/img24hp/boAt/13th/march/978x900._CB579041291_.gif" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div className='flex justify-center py-5 md:py-10 border'>
      
      <div className="overflow-hidden grid grid-cols-3 gap-2">
       
          {Images.map((image, i) => (
            <img
              key={i}
              src={image.path}
              alt={`Banner ${i}`}
              className={`rounded-md w-72 h-96`}
            />
          ))}
        
      </div>
      
    </div>
  );
}

export default AudioCarousel;
