import React from 'react';
import Navbar from '../components/molecules/Navbar';
import Content from '../components/organisms/Content';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Content />
    </div>
  );
};

export default Home;
