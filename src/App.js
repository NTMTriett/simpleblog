import React from "react";
import { Outlet, Route, BrowserRouter, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
