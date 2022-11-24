import React from 'react';
import Button from '../../atoms/Button';
import InfoCard from './infoCard';

const PersonalInformation = () => {
  return (
    <div className='h-44 bg-white rounded-md mt-6 px-4'>
      <div className='mt-4'>
        <div className='flex justify-between'>
          <p className='font-medium text-slate-900'>
            All Personal Informations
          </p>
          <div className=''>
            <Button type='edit' title='Edit' />
          </div>
        </div>
        <div className='mt-4'>
          <InfoCard type='email' title='ariprayoga007@gmail.com' />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
