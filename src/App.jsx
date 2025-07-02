import { useGameStore } from './store/gameStore'
import GameStartScreen from './components/GameStartScreen'
import GameBoard from './components/GameBoard'

function App() {
  const { gameStatus } = useGameStore()
  
  if (gameStatus === 'playing') {
    return <GameBoard />
  }
  
  return <GameStartScreen />
}

export default App
