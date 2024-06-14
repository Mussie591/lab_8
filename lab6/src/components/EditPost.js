import React, { useState } from 'react';
import axios from 'axios';
import './EditPost.css';


const EditPost = ({ post, onEditComplete }) => {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = { ...post, title, author, content };
      await axios.put(`http://localhost:8080/api/v1/posts/${post.id}`, updatedPost);
      onEditComplete();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
