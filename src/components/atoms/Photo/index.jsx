import React from 'react';

const PhotoProfile = () => {
  const imgUrl = new URL('../../../assets/profile.jpg', import.meta.url).href;
  return <img src={imgUrl} className='w-10 h-10 object-cover rounded-full' />;
};

export default PhotoProfile;
