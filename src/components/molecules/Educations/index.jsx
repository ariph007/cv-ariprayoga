import React from 'react';
import EducationCard from './EducationCard';
import education from '../../../constants/educations';

const Education = () => {
  return (
    <div className='bg-white rounded-md mt-6 px-4 mb-20'>
      <div className='mt-4 pb-6'>
        <div className='flex justify-between'>
          <p className='font-medium text-slate-900'>Education</p>
        </div>
        <div className='flex flex-col space-y-4'>
          {education.map((edu) => (
            <EducationCard
              date={edu.date}
              institution={edu.institution}
              logoUrl={edu.logoUrl}
              project={edu.project}
              studyProgram={edu.studyProgram}
              title={edu.title}
              urlProject={edu.urlProject}
              key={edu.id}
              formalEducation={edu.formalEducation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
