import React, { useRef } from 'react';
import axios from 'axios';
import './AddPost.css';

const AddPost = ({ onPostAdded }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value
      };
      await axios.post('http://localhost:8080/api/v1/posts', newPost);
      onPostAdded();
      titleRef.current.value = '';
      authorRef.current.value = '';
      contentRef.current.value = '';
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          required
        />
        <input
          type="text"
          placeholder="Author"
          ref={authorRef}
          required
        />
        <textarea
          placeholder="Content"
          ref={contentRef}
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
