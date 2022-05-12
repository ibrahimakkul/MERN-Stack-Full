import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";

function Userblog() {
  const [user, setuser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setuser(data.user));
  }, []);
  console.log(user);

  return (
    <div >
      {" "}
      {user && user.blogs &&
        user.blogs.map((blog, index) => (
          <Cart
          key={index}
           id={blog._id}
          isUser={true}
            title={blog.title}
            image={blog.image}
            description={blog.description}
            userName={user.name}
          />
        ))}
    </div>
  );
}

export default Userblog;
