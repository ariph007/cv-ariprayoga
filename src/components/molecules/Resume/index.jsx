import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Button from '../../atoms/Button';

const Resume = () => {
  const btnDownloadOnclick = (e) => {
    window.open(
      'https://drive.google.com/file/d/172zlhEntgQN2KoZcIfAH4l4CLvgj3ylR/view?usp=sharing',
      '_blank'
    );
  };
  return (
    <div className='bg-white rounded-md mt-6 px-4'>
      <div className='mt-4'>
        <div className='flex justify-between'>
          <p className='font-medium text-slate-900'>Resume</p>
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <div className='flex items-center pb-4'>
            <div onClick={btnDownloadOnclick} className='text-gray-600 bg-gray-200 px-2 py-2 h-fit rounded-md mr-4 hover:cursor-pointer hover:bg-gray-300'>
              <HiOutlineDocumentText />
            </div>
            <p className='text-sm hover:cursor-pointer hover:text-blue-600' onClick={btnDownloadOnclick}>cv_ariprayoga.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
