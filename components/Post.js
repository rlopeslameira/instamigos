import React from 'react';
import { ChatIcon, DotsHorizontalIcon, PaperAirplaneIcon, HeartIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'

function Post({post}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* POST USER HEADER */}
      <div className='flex items-center p-5'>
        <img src={post.userImg} className="rounded-full h-12 object-contain border
        p-1 mr-3"/>
        <p className='flex-1 font-bold '>{post.username}</p>
        <DotsHorizontalIcon className='h-5 '/>
      </div>
      
      {/* PHOTO */}
      <img src={post.img} className="object-cover w-full"/>

      {/* BUTTONS */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn'/>
          <ChatIcon className='btn'/>
          <PaperAirplaneIcon className='btn'/>
        </div>

        <BookmarkIcon className='btn'/>
      </div>

      {/* CAPTION */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{post.username} </span>
        {post.caption}

      </p>

      {/* FORM COMMNET */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7'/>
        <input type="text" placeholder='Add a comment...'
        className='border-none flex-1 focus:ring-0 outline-none'/>
        <button className='font-semibold text-blue-500'>Post</button>
      </form>

    </div>
  );
}

export default Post;