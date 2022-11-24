import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Button from '../../atoms/Button';

const Resume = () => {
  const btnDownloadOnclick = (e) => {
    window.open(
      'https://drive.google.com/file/d/1nly11vUlglEcYtCylyZuKwHac-tR92CI/view?usp=sharing',
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
            <div className='text-gray-600 bg-gray-200 px-2 py-2 h-fit rounded-md mr-4'>
              <HiOutlineDocumentText />
            </div>
            <p className='text-sm'>cv_ariprayoga.pdf</p>
          </div>
          <Button type='download' onClick={btnDownloadOnclick} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
