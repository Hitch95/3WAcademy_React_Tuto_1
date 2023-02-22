import { useEffect, useState } from "react";
import { findAll } from "./api";

export default function UserTr() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const json = await findAll();
            console.log(json);
            setUsers(json);
        })();
    }, []);

    return (
        <tfooter>
            {users.map((user) => (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tfooter>

    )
}