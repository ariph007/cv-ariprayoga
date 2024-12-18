import React from 'react';
import Button from '../../atoms/Button';
import PhotoProfile from '../../atoms/Photo';

const Profile = () => {
  const btnGithubOnclick = () => {
    window.open('https://github.com/ariph007', '_blank');
  };
  const btnYoutubeOnclick = () => {
    window.open('https://www.youtube.com/@DevMentor_Hub', '_blank');
  };
  const btnLinkedinOnclick = () => {
    window.open('https://www.linkedin.com/in/ari-prayoga/', '_blank');
  };

  const btnHireOnclick = () => {
    window.location.href = 'mailto:ariprayoga007@gmail.com';
    e.preventDefault();
  };
  return (
    <div className='flex flex-col bg-white px-4 mt-4 rounded-md'>
      <div className='flex flex-col md:flex-row justify-between w-full my-4'>
        <div className='flex w-full ml-2'>
          <PhotoProfile />
          <div className='flex flex-col ml-4'>
            <p className='text-slate-900 font-medium'>Ari Prayoga Hutabarat</p>
            <p className='text-slate-600 font-medium text-xs'>
              Jakarta, Indonesia
            </p>
            <p className='text-slate-800 font-medium text-xs mt-2'>
              Springboot, ReactJS, Angular, Java, JavaScript, TypeScript, Jasper Report, Apache POI, Websocket, Thymeleaf, PostgreSql
            </p>
          </div>
        </div>
        <div className='md:flex md:flex-col space-y-2 items-center hidden'>
          <Button title='Linkedin' type='social' onClick={btnLinkedinOnclick} />
          <Button title='Github' type='github' onClick={btnGithubOnclick} />
          <Button title='Youtube' type='youtube' onClick={btnYoutubeOnclick} />
        </div>
      </div>
      <div className='flex pb-6 pt-2 justify-between'>
        <div className='md:hidden items-center flex'>
          <Button title='Linkedin' type='social' onClick={btnLinkedinOnclick} />
        </div>
        <Button title='Hire Me' onClick={btnHireOnclick} />
      </div>
    </div>
  );
};

export default Profile;
