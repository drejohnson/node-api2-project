import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:4000/api/posts");
      const data = await res.data;
      setPosts(data);
    })();
  }, []);
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
