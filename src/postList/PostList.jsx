import { useEffect, useState } from "react";
import postApi from "./postsApi";
import PostTd from "./PostTd";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const json = await postApi.findAll();
      if (Array.isArray(json)) {
        setPosts(json);
      }      
    })();
  }, []);

  async function handleRemove(id) {
    try {
      await postApi.remove(id);
      setPosts((prevState) => prevState.filter((u) => u.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(post) {
    console.log(post); // Add this line
    try {
      const updatedPost = await postApi.update(post);
  
      setPosts((prevState) =>
        prevState.map((u) => {
          if (u.id === updatedPost.id) {
            return updatedPost;
          }
  
          return u;
        })
      );
    } catch (error) {
      console.error(error);
    }
  }  
  

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <PostTd
            key={post.id}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
            {...post}
          />
        ))}
      </tbody>
    </table>
  );
}
