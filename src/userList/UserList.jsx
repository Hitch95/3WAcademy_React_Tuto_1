import { useEffect, useState } from 'react'
import userApi from './api'
import UserTd from './UserTd'

export default function UserList () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      const json = await userApi.findAll()
      setUsers(json)
    })()
  }, [])

  async function handleRemove(id) {
    try {
        await userApi.remove(id)

        setUsers(prevState => prevState.filter(u => u.id !== id))
    } catch (error) {
        console.error(error)
    }
  }

  async function handleUpdate(user) {
    try {
        const updatedUser = await userApi.update(user)

        setUsers(prevState => prevState.map(u => {
            if (u.id === updatedUser.id) {
                return updatedUser
            }

            return u
        }))
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Email</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
            <UserTd key={user.id} handleRemove={handleRemove} handleUpdate={handleUpdate} {...user}/>
        ))}
      </tbody>
    </table>
  )
}
