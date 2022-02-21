import React from 'react';
import {useSession, signOut} from 'next-auth/react';

function MiniProfile() {
  const {data: session} = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={session?.user?.image} alt="User photo" 
      className='h-16 w-16 rounded-full border p-[2px]'/> 

      <div className='flex-1 mx-4'>
        <h2 className='font-bold '>{session?.user?.username}</h2>
        <h3 className='text-sm text-grey-400'>Welcome to instamigos</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>  
  );
}

export default MiniProfile; 