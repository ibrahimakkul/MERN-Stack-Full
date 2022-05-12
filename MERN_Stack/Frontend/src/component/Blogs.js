import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";

function Blogs() {
  const [blogs, setblogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setblogs(data.blogs));
  }, []);
  console.log(blogs);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Cart
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
}

export default Blogs;
