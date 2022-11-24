import React, { useState } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Button from '../../atoms/Button';
import Modal from '../Modal';
import ExperiencesCard from './experiencesCard';
import experiences from '../../../constants/experiences';

const Experiences = () => {
  //   let [isModalOpen, setIsModalOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  function experienceAdd() {
    setIsOpen(!isOpen);
    // setIsModalOpen(!isModalOpen);
    // console.log(isModalOpen);
  }

  return (
    <div className='bg-white rounded-md mt-6 px-4'>
      {setIsOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      <div className='mt-4'>
        <div className='flex justify-between'>
          <p className='font-medium text-slate-900'>Experience</p>
          <Button type='add' title='Add' onClick={experienceAdd} />
        </div>
        <div className='mt-4 flex flex-col justify-between items-center'>
          {experiences.map((item) => (
            <ExperiencesCard
              key={item.id}
              company={item.company}
              Initial={item.Initial}
              date={item.date}
              position={item.position}
              type={item.type}
              description={item.descriptions}
              companyType={item.companyType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
