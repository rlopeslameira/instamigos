import React, { useEffect, useState } from 'react'
import Story from '../components/Story'
const { faker } = require('@faker-js/faker')
import {useSession} from 'next-auth/react'

function Stories() {
  const {data: session} = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions_ = [...Array(14)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,      
    }));

    setSuggestions(suggestions_);
  },[])

  return (    
    <div className='flex space-x-2 p-6 bg-white border-gray-200 border 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>

      {suggestions.map(profile => (
        <Story key={profile.id}
        img={profile.avatar}
        username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;