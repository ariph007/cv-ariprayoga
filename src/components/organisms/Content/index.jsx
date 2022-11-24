import React from 'react';
import Button from '../../atoms/Button';
import Education from '../../molecules/Educations';
import Experiences from '../../molecules/Experiences';
import PersonalInformation from '../../molecules/PersonalInformation';
import Profile from '../../molecules/Profile';
import Resume from '../../molecules/Resume';
import Portfolio from '../Portfolio';

const Content = () => {
  return (
    <div className='min-w-full min-h-full bg-slate-50'>
      <div className='md:mx-20 mx-4 flex flex-col md:flex-row md:space-x-12'>
        <div className='w-full md:w-8/12 flex flex-col'>
          <Profile />
          <Resume />
          <Experiences />
          <Education />
        </div>
        <div className='w-full flex md:flex md:w-4/12 pb-10'>
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default Content;
