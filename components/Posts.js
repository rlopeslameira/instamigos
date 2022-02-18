import React from 'react'
import faker from '@faker-js/faker'
import { useState, useEffect } from 'react'
import Post from '..//components/Post'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts_ = [...Array(10)].map((_, i) => ({
      id: i,      
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.image(),
      caption: faker.lorem.paragraph()
    }));
    setPosts(posts_);
  }, [])

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}      
    </div>
  );
}

export default Posts;