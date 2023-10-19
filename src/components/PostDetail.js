import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { posts } from "../data";
import CommentForm from "./CommentForm";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  const navigate = useNavigate();

  // Define the handleDelete function to delete the post
  const handleDelete = () => {
    // Implement the logic to delete the post here
    // You can remove the post from the 'posts' array or mark it as deleted, depending on your data structure.
    // After deletion, you can navigate back to the post list or any desired location.
  };

  return (
    <div>
      <h2>Chi tiết bài viết</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
      <button onClick={handleDelete}>Xóa</button>
      <h4>Bình luận</h4>
      <ul>
        {post.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <CommentForm />
    </div>
  );
}

export default PostDetail;
