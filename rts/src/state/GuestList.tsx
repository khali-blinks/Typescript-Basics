import { useState } from "react"

export const GuestList : React.FC = () => {
  const [ name, setName] = useState('');
  const [ guests, setGuests] = useState([])

  const onClick = () => {
    setName('');
    setGuests([...guests,name])
  }
  return <div>
    <h3>Guest List</h3>

    <input value={name} onChange={(e)=> setName(e.target.value)}/>
    <button onClick={onClick}>Add Guest</button>
  </div>
}