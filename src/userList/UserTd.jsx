import { useRef, useState } from "react"

export default function UserTd ({ id, name, username, email, handleRemove, handleUpdate }) {
    const [isEditing, setIsEditing] = useState(false)
    const nameInputRef = useRef(null)
    const usernameInputRef = useRef(null)
    const emailInputRef = useRef(null)

    function handleSave() {
        setIsEditing(false)
        handleUpdate({
            id,
            name: nameInputRef.current.value,
            username: usernameInputRef.current.value,
            email: emailInputRef.current.value
        })
    }

    function TdUserInfo() {
        if (isEditing) {
            return <>
                <td><input ref={nameInputRef} type="text" defaultValue={name}/></td>
                <td><input ref={usernameInputRef} type="text" defaultValue={username}/></td>
                <td><input ref={emailInputRef} type="text" defaultValue={email}/></td>
            </>
        } 
        
        return <>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
        </>
    }
    
  return (
    <tr>
      <th scope='row'>{id}</th>
      <TdUserInfo />
      
      <td>{isEditing ?
            <button onClick={handleSave} className="btn btn-success me-1">Save</button>
            : <button onClick={() => setIsEditing(true)} className="btn btn-warning me-1">Edit</button>
        }
        <button onClick={() => handleRemove(id)} className="btn btn-danger">Remove</button>
      </td>
    </tr>
  )
}
