import React from 'react';
import Typed from 'react-typed';

const Logo = () => {
  return (
    <Typed
      strings={['Coder']}
      typeSpeed={120}
      loop
      className='text-blue-600 font-semibold text-2xl'
    />
  );
  // return <p className='text-blue-600 font-semibold text-2xl'>Coder</p>;
};

export default Logo;
