import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';
import { SelectedPostContext } from '../SelectedPostContext';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const { selectedPostId, setSelectedPostId } = useContext(SelectedPostContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePostClick = (post) => {
    setSelectedPostId(post.id);
  };

  const handlePostDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/posts/${postId}`);
      fetchPosts();
      setSelectedPostId(null);
    } catch (error) {
      console.error("Error deleting post:", error.response ? error.response.data : error.message);
    }
  };

  const handlePostAdded = () => {
    fetchPosts();
  };

  const handleEditComplete = () => {
    fetchPosts();
    setSelectedPostId(null);
  };

  const selectedPost = posts.find(post => post.id === selectedPostId);

  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="posts-wrapper">
          <Posts posts={posts} onPostClick={handlePostClick} />
        </div>
        <div className="details-container">
          {selectedPost && (
            <PostDetails post={selectedPost} onDelete={handlePostDelete} onEditComplete={handleEditComplete} />
          )}
        </div>
        <div className="add-post-container">
          <AddPost onPostAdded={handlePostAdded} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
