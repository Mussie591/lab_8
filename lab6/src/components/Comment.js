import React from 'react';
import './Comment.css';

const Comment = React.memo(({ comment }) => (
  <div className="comment">
    <p>{comment.name}</p>
  </div>
));

export default Comment;
