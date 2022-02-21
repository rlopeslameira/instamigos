import React from 'react'
import faker from '@faker-js/faker'
import { useState, useEffect } from 'react'
import Post from '..//components/Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
    setPosts(snapshot.docs);
  }), [db])

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} id={post.id} post={post.data()}/>
      ))}      
    </div>
  );
}

export default Posts;