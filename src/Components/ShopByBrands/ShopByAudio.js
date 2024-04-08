import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const ShopByAudio = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      
  return (
    <div className='p-3 border-2 mt-2 border-l-8 border-r-8'>
        <div>
            <h2 className='text-md font-semibold'>
                Explore Top Audio Brands
            </h2>
        </div>
        <div className='mt-4'>
        <Carousel responsive={responsive}>
  <div className=''>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/boat._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/oneplus._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/NOICE._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/sony._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/JBL._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/shopbybrand/new/PTRON._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
  <div>
  <img src='https://m.media-amazon.com/images/G/31/img24hp/13th/mar/boult._SS300_QL85_FMpng_.png'
  alt='Image_1'
  className='w-40'
  />
  </div>
</Carousel>
        </div>
    </div>
  )
}

export default ShopByAudio