import React from 'react';
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai';
import { IoAddSharp } from 'react-icons/io5';

const Button = ({ title, type, onClick }) => {
  if (type === 'social') {
    return (
      <button
        onClick={onClick}
        className='flex items-center px-4 py-1 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-800'
      >
        <span className='mr-2'>
          <BsLinkedin />
        </span>
        {title}
      </button>
    );
  } else if (type === 'github') {
    return (
      <button
        onClick={onClick}
        className='flex items-center px-6 py-1 bg-slate-900 text-slate-100 font-medium rounded-sm hover:bg-slate-600'
      >
        <span className='mr-2'>
          <BsGithub />
        </span>
        {title}
      </button>
    );
  }else if (type === 'youtube') {
    return (
      <button
        onClick={onClick}
        className='flex items-center px-4 py-1 bg-red-600 text-slate-100 font-medium rounded-sm hover:bg-slate-600'
      >
        <span className='mr-2'>
          <BsYoutube />
        </span>
        {title}
      </button>
    );
  } else if (type === 'edit') {
    return (
      <button className='flex items-center font-medium text-blue-600 hover:text-blue-800'>
        <AiOutlineEdit className=' mr-2' />
        <p className='text-sm  '>Edit</p>
      </button>
    );
  } else if (type === 'add') {
    return (
      <button
        onClick={onClick}
        className='flex items-center font-medium text-blue-600 hover:text-blue-800'
      >
        <IoAddSharp className=' mr-2' />
        <p className='text-sm  '>Add</p>
      </button>
    );
  } else if (type === 'download') {
    return (
      <button
        onClick={onClick}
        className='flex items-center font-medium text-blue-600 hover:text-blue-800'
      >
        <AiOutlineDownload className=' mr-2' />
        <p className='text-sm  '>Download</p>
      </button>
    );
  }
  return (
    <a
      onClick={onClick}
      className='relative inline-block px-4 py-1 font-medium group hover:cursor-pointer'
    >
      <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
      <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
      <span className='relative text-black group-hover:text-white flex items-center'>
        <span className='mr-2'>
          <SiMinutemailer />
        </span>
        {title}
      </span>
    </a>
  );
};

export default Button;
