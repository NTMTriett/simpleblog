import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../data";

function PostForm() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const navigate = useNavigate();

  const handleSave = () => {
    if (post) {
      // Chỉnh sửa bài viết
      post.title = title;
      post.content = content;
    } else {
      // Tạo bài viết mới
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        comments: [],
      };
      posts.push(newPost);
    }
    navigate("/");
  };

  return (
    <div>
      <h2>{post ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <form>
        <div>
          <label>Tiêu đề:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Nội dung:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={handleSave}>Lưu</button>
      </form>
    </div>
  );
}

export default PostForm;
