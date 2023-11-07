import { useState } from 'react'
import '../assets/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mdiv'>
        <h1>MEMO Game</h1>
        <h2 onClick={()=>{
          setCount(count+1)
        }}>Score: {count}</h2>
        
      </div>
    </>
  )
}

export default App
