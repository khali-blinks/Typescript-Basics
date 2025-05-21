import { useState } from "react";

const users = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Jack', age: 35},
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');

  return <div>
    User Search
    <input value={name} onChange={(e) => setName(e.target.value)}></input>
    <button onClick={onCLick}>Find User</button>
    </div>
}

export default UserSearch;