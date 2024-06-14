import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';
import EditPost from './EditPost';
import './PostDetails.css';

const PostDetails = ({ post, onDelete, onEditComplete }) => {
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/posts/${post.id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [post.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
    onEditComplete();
  };

  if (isEditing) {
    return <EditPost post={post} onEditComplete={handleEditComplete} />;
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p className="content">{post.content}</p>
      <div className="buttons">
        <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
