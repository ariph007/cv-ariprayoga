import React from 'react';

const EducationCard = ({
  institution,
  title,
  studyProgram,
  date,
  logoUrl,
  project,
  urlProject,
  formalEducation,
}) => {
  return (
    <div className='flex flex-col md:flex-row items-start border-b-[1px] border-gray-100 pb-4'>
      <div className='flex md:w-1/2'>
        <div className='mr-4'>
          <img src={logoUrl} className='w-16 h-16 rounded-lg' />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <p className='text-sm font-medium text-slate-900'>{institution}</p>
            <p className='text-slate-600 text-xs font-medium w-full'>{title}</p>
          </div>
          <p className='text-xs font-normal text-slate-400'>{studyProgram}</p>
          <div className='flex space-x-4'>
            <p className='text-xs font-light text-slate-400'>{date}</p>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 font-normal text-slate-400 text-xs pt-2 md:pt-4'>
        <p className='text-slate-800'>
          {formalEducation ? 'Undergraduate Thesis :' : 'Final Project'}
        </p>
        <a href={urlProject} target='_blank' className='hover:text-slate-500'>
          {project}
        </a>
      </div>
    </div>
  );
};

export default EducationCard;
