import { useState } from 'react'
import Counter from './Counter'
import StopWatch from './StopWatch'
import Incrementer from './Incrementer'
import InputWriter from './InputWriter'
import UserList from './userList/UserList'
import PostList from './postList/PostList'
import Forms from './Forms'

const componentNames = [
  'input-writer',
  'counter',
  'incrementer',
  'stopwatch',
  'user-list',
  'post-list',
  'forms'
]

export default function App () {
  const [component, setComponent] = useState('user-list')

  return (
    <div className='container my-5'>

      <h1>React tuto</h1>
      <select
        className='mt-2 mb-4'
        value={component}
        onChange={e => setComponent(e.currentTarget.value)}
      >
        {componentNames.map((name, i) => <option key={i} value={name}>{name.toUpperCase()}</option>)}
      </select>
      {findBody(component)}
    </div>
  )
}

function findBody (component) {
  switch (component) {
    case 'input-writer':
      return <InputWriter />

    case 'counter':
      return <Counter />

    case 'incrementer':
      return <Incrementer />

    case 'stopwatch':
      return <StopWatch />

    case 'user-list':
      return <UserList />

    case 'post-list':
      return <PostList />
    
    case 'forms':
      return <Forms />

    default:
      throw new Error(`Invalid component: ${component}`)
  }
}
