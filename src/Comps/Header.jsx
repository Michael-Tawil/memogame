
function Header(props) {
  const {score} = props

  return (
    <>
      <div className='mdiv'>
        <h1 className="text-xl">A Pokemon Game</h1>
        <h2 className="text-xl">Score: {score}</h2>
      </div>
    </>
  )
}

export default Header