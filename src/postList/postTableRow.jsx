import { useEffect, useState } from "react";
import { findAll } from "./postsApi";

export default function PostTr() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const json = await findAll();
            console.log(json);
            setPosts(json);
        })();
    }, []);

    return (
        <tfooter>
            {posts.map((post) => (
                <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            ))}
        </tfooter>

    )
}