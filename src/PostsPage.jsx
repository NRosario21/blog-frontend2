import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <PostsIndex posts={posts} />
    </main>
  );
}
