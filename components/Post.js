import React, { useEffect, useState } from 'react';
import { ChatIcon, DotsHorizontalIcon, PaperAirplaneIcon, HeartIcon as HeartIconLine, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'

import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

function Post({id, post}) {
  const {data: session} = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [haslike, setHaslike] = useState(false);

  useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => {
    setComments(snapshot.docs)
  }), [db])

  useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
    setLikes(snapshot.docs)
  }), [db, id])

  useEffect(() => setHaslike(likes.findIndex((like) => like.id === session?.user?.uid) > -1) ,[likes])

  const likePost = async () => {
    if (haslike){
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    }else{
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username
      })
    }
    
  }

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className='bg-white my-7 border rounded-sm'>
      <div className='flex items-center p-5'>
        <img src={post.profileImg} className="rounded-full h-12 object-contain border
        p-1 mr-3"/>
        <p className='flex-1 font-bold '>{post.username}</p>
        <DotsHorizontalIcon className='h-5 '/>
      </div>
      
      <img src={post.image} className="object-cover w-full"/>

      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            {haslike ? (
              <HeartIcon onClick={likePost} className='btn text-red-600'/>
            ) : (
              <HeartIconLine onClick={likePost} className='btn'/>              
            )}
            <ChatIcon className='btn cursor-not-allowed' />
            <PaperAirplaneIcon className='btn'/>
          </div>

          <BookmarkIcon className='btn'/>
        </div>
      )}

      {/* CAPTION */}
      <div className='p-5 truncate'>
        {likes.length > 0 && (
          <p className='font-bold'>{likes.length} likes</p>
        )}
        <span className='font-bold mr-1'>{post.username}:</span>
        {post.caption}
      </div>

      {comments.length > 0 && (
        <div className='ml-10 max-h-40 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map(comment => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img src={comment.data().userImage} alt={comment.data().username} className='h-7 w-7 rounded-full'/>
              <p className='text-sm flex-1'>
                <span className='font-bold mr-2'>{comment.data().username}:</span>{comment.data().comment}                
              </p>
              <Moment className='pr-5 text-xs' fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7'/>
          <input type="text" placeholder='Add a comment...'
          value={comment} 
          onChange={(e) => setComment(e.target.value)}                    
          className='border-none flex-1 focus:ring-0 outline-none'/>
          <button onClick={sendComment} disabled={!comment.trim()} type='submit' className='font-semibold text-blue-500'>Post</button>
        </form>
      )}

    </div>
  );
}

export default Post;