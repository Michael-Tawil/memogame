
function Header(props) {
  const {score} = props

  return (
    <>
      <div className='mdiv'>
        <h1>MEMO Game</h1>
        <h2>Score: {score}</h2>
        
      </div>
    </>
  )
}

export default Header