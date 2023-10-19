import React from "react";
import { Link, Outlet } from "react-router-dom";
import { posts } from "../data";

function PostList() {
  return (
    <div>
      <h2>Danh sách các bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Tạo bài viết mới</Link>
      <hr />
      <Outlet />
    </div>
  );
}

export default PostList;
