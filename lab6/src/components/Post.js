import React from 'react';
import './Post.css';

const Post = ({ post, onClick }) => (
  <div className="post" onClick={onClick}>
    <h2>Content: {post.content}</h2>
    <p>Title: {post.title}</p>
    <p>Author: {post.author}</p>
  </div>
);

export default Post;
