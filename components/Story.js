import React from 'react';

function Story({img, username}) {
  return (
    <div className='dontworking'>
      <img src={img} alt={username} className="h-14 w-14 rounded-full p-[1.5px]
      border-red-500 border-2 object-contain cursor-pointer 
      hover:scale-110 transition-transform duration-200 ease-out dontworking"/>
      <p className='text-xs w-14 truncate text-center dontworking'>{username}</p>
    </div>
  );
}

export default Story;