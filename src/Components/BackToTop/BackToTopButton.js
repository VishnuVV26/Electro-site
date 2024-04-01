import React from 'react'

const BackToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <div className='flex'>
        <button className='bg-slate-400 w-full h-8 justify-center text-sm font-medium cursor-pointer hover:bg-slate-500' onClick={scrollToTop}>Back to top</button>
    </div>
  )
}

export default BackToTopButton