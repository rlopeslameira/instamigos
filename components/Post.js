import React from 'react';
import { HeartIcon as HeartIconFilled} from '@heroicons/react/solid'
import { DotsHorizontalIcon } from '@heroicons/react/outline'


function Post({post}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header */}
      <div className='flex items-center p-5'>
        <img src={post.userImg} className="rounded-full h-12 object-contain border
        p-1 mr-3"/>
        <p className='flex-1 font-bold '>{post.username}</p>
        <DotsHorizontalIcon className='h-5 '/>
      </div>

      <img src={post.img} className="object-contain w-full"/>
    </div>
  );
}

export default Post;