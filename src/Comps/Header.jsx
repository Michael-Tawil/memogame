import { useState } from 'react'
import '../assets/Header.css'

function Header(props) {
  const {highscore} = props

  return (
    <>
      <div className='mdiv'>
        <h1>MEMO Game</h1>
        <h2>High Score: {highscore}</h2>
        
      </div>
    </>
  )
}

export default Header