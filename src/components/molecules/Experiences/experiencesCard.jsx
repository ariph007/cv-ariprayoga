import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FiChevronUp } from 'react-icons/fi';

const ExperiencesCard = ({
  company,
  position,
  type,
  date,
  Initial,
  description,
  companyType,
}) => {
  return (
    <div className='flex flex-col w-full pb-4'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full justify-between rounded-lg bg-slate-100/40 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
              <div className='flex items-center'>
                <div className='bg-gray-200 w-[40px] h-[40px] mr-6 rounded-full flex items-center justify-center'>
                  <p className='text-sm font-medium text-slate-600'>
                    {Initial}
                  </p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex md:flex-row flex-col md:space-x-4 md:items-center justify-start items-start'>
                    <p className='text-sm font-medium text-slate-900'>
                      {company}
                    </p>
                    <p className='bg-gray-200 text-slate-600 text-xs px-1 h-fit font-medium rounded-sm'>
                      {type}
                    </p>
                  </div>
                  <p className='text-xs font-normal text-slate-400'>
                    {companyType}
                  </p>
                  <div className='flex flex-col md:flex-row md:space-x-4'>
                    <p className='text-xs font-medium text-slate-400'>
                      {position}
                    </p>
                    <p className='text-xs font-light text-slate-400'>{date}</p>
                  </div>
                </div>
              </div>
              <FiChevronUp
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-blue-600`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              className='overflow-hidden'
              enter='transition transition-all duration-200 ease-in'
              enterFrom='transform max-h-0'
              enterTo='transform max-h-screen'
              leave='transition transition-all duration-400 ease-out'
              leaveFrom='transform max-h-screen'
              leaveTo='transform max-h-0'
            >
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                <ul>
                  {description.map((desc, index) => (
                    <li key={index} className='list-disc mx-4 text-xs'>
                      {desc}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ExperiencesCard;
