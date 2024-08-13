import { useState } from 'react'
import '../assets/Header.css'
import Card from './Card'

function Header() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div className='mdiv'>
        <h1>MEMO Game</h1>
        <h2>Score: {count}</h2>
        
      </div>
      <Card/>
    </>
  )
}

export default Header