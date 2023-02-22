import { useRef, useState } from "react"

export default function PostTd ({ userId, id, title, body, handleRemove, handleUpdate }) {
    const [isEditing, setIsEditing] = useState(false)
    const titleInputRef = useRef(null)
    const bodyInputRef = useRef(null)

    function handleSave() {
        setIsEditing(false);
        try {
            handleUpdate({
                id,
                userId,
                title: titleInputRef.current.value,
                body: bodyInputRef.current.value
            });
        } catch (error) {
            console.error(error);
        }
    }    

    function TdUserInfo() {
        if (isEditing) {
            return <>
                <td><input ref={titleInputRef} type="text" defaultValue={title}/></td>
                <td><input ref={bodyInputRef} type="text" defaultValue={body}/></td>
            </>
        } 
        
        return <>
            <td>{title}</td>
            <td>{body}</td>
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
