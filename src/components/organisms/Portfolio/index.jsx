import React from 'react';
import portfolio from '../../../constants/portfolio';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Portfolio = () => {
  const img = (url) => {
    const imgUrl = new URL(url, import.meta.url).href;
    return imgUrl;
  };

  const slideUp = () => {
    let slider = document.getElementById('sliderPortfolio');
    slider.scrollTop = slider.scrollTop - 300;
  };

  const slideDown = () => {
    let slider = document.getElementById('sliderPortfolio');
    slider.scrollTop = slider.scrollTop + 300;
  };

  return (
    <div className='flex flex-col space-y-4 h-screen w-full items-center'>
      <div className='mt-4 self-start bg-blue-500 px-2 rounded-sm'>
        <p className='text-white text-base'>My Portofolio</p>
      </div>
      <div className='w-fit bg-slate-400 rounded-full hover:bg-slate-500 justify-center'>
        <MdOutlineArrowBackIosNew
          onClick={slideUp}
          // fontSize='large'
          size={32}
          className=' text-white cursor-pointer rotate-90 '
        />
      </div>
      <div
        id='sliderPortfolio'
        className='w-full h-full overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative space-y-8'
      >
        {portfolio.map((item, index) => (
          <div
            className='flex flex-col bg-blue-400/10 rounded-md overflow-hidden pb-2
        hover:scale-105 transform transition duration-300 p-4 justify-center items-center'
          >
            <img
              src={img(item.imgUrl)}
              className='max-h-[400px] max-w-[400px] px-4'
            />
            <div className='flex flex-col px-2 whitespace-normal scale-95 w-full'>
              <p className='text-slate-900 text-sm font-medium'>{item.name}</p>
              <p className='text-xs font-normal'>{item.description}</p>
            </div>
            {
              item.tools && (
                <div className="flex flex-col px-2 whitespace-normal scale-95 mt-2 w-full">
                <p className='text-xs font-semibold'>Tools:</p>
              <p className='text-xs font-normal'>{item.tools}</p>
            </div>
              )
            }
          </div>
        ))}
      </div>
      <div className='w-fit bg-slate-400 rounded-full hover:bg-slate-500 justify-center'>
        <MdOutlineArrowBackIosNew
          onClick={slideDown}
          // fontSize='large'
          size={32}
          className=' text-white cursor-pointer -rotate-90 '
        />
      </div>
    </div>
  );
};

export default Portfolio;
