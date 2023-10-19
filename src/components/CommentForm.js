import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";

function CommentForm() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    post.comments.push({
      id: post.comments.length + 1,
      text: newComment,
    });
    setNewComment("");
  };

  return (
    <div>
      <h2>Thêm bình luận</h2>
      <input
        type="text"
        placeholder="Nhập bình luận"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>Gửi</button>
    </div>
  );
}

export default CommentForm;
