import { motion } from "framer-motion";
import { Play,Trophy } from "lucide-react";
import PropTypes from 'prop-types';

const GameStartScreen = ({onStartGame,highScore}) => {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100">
            <h1  className="text-4xl font-bold">RMemory Game</h1>
            <p className="text-lg text-gray-600">Your best score: {highScore || 0}</p>
            <button className=" bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>onStartGame('Medium')}>Start Game</button>
        </div>
    )
}
GameStartScreen.propTypes ={
    onStartGame: PropTypes.func.isRequired,
    highScore: PropTypes.number
}
export default GameStartScreen