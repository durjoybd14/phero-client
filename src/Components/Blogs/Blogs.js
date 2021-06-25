import React, { useEffect, useState } from "react";
import BlogsContent from "./BlogsContent";
import allBlogs from "./allBlogs.json";

const Blogs = () => {
  const [blogsText, setBlogsText] = useState([]);
  useEffect(() => {
    setBlogsText(allBlogs);
  }, []);
  return (
    <section className="container p-5">
      <div className="text-center mt-5">
        <span className="fs-3 fw-bold">My Blogs</span>
      </div>
      <div className="row">
        {blogsText.map((blog) => (
          <BlogsContent key={blog.id} blog={blog}></BlogsContent>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
