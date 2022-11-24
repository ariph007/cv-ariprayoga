import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const InfoCard = ({ type, title }) => {
  if (type === 'email') {
    return (
      <div className='flex items-center'>
        <div className='text-gray-600 bg-gray-200 px-2 py-2 h-fit rounded-md mr-4'>
          <AiOutlineMail />
        </div>
        <div className='flex flex-col'>
          <p className='font-medium text-slate-900 text-sm'>{title}</p>
          <p className='text-xs font-light text-slate-500'>Mail Address</p>
        </div>
      </div>
    );
  }
  return <div>InfoCard</div>;
};

export default InfoCard;
