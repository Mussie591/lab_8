import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({ posts, onPostClick }) => (
  <div className="container">
    {posts.map((post) => (
      <Post key={post.id} post={post} onClick={() => onPostClick(post)} />
    ))}
  </div>
);

export default Posts;
