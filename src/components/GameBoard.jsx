import { useGameStore } from "../store/gameStore";
import { motion } from "framer-motion";
import { Heart, Trophy } from "lucide-react";
import PokemonCard from "./PokemonCard";

const GameBoard = () => {
    const {
        currentRoundCards,
        currentRound,
        attemptsLeft,
        totalScore,
        loadingState,
        handleCardClick
    } = useGameStore()

    if (loadingState) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-6xl"
                >
                    ⚡
                </motion.div>
                <p className="text-white text-2xl ml-4">Loading Round {currentRound}...</p>
            </div>
        )
    }

    const getRoundInfo = () => {
        const rounds = {
            1: { name: "Pokemon", emoji: "🎮", color: "from-green-500 to-green-600" },
            2: { name: "Digimon", emoji: "⚡", color: "from-yellow-500 to-orange-500" },
            3: { name: "Naruto", emoji: "🥷", color: "from-red-500 to-red-600" }
        }
        return rounds[currentRound] || rounds[1]
    }

    const roundInfo = getRoundInfo()

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-8"
            >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3">
                        <Trophy className="text-yellow-400" size={20} />
                        <span className="text-white text-lg sm:text-xl font-bold">Score: {totalScore}</span>
                    </div>

                    <div className={`flex items-center gap-2 bg-gradient-to-r ${roundInfo.color} rounded-2xl px-4 py-2 sm:px-6 sm:py-3`}>
                        <span className="text-xl sm:text-2xl">{roundInfo.emoji}</span>
                        <span className="text-white text-lg sm:text-xl font-bold">Round {currentRound}: {roundInfo.name}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3">
                        <Heart className="text-red-400" size={20} />
                        <span className="text-white text-lg sm:text-xl font-bold">Lives: {attemptsLeft}</span>
                    </div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {currentRoundCards.map((card, index) => (
                        <PokemonCard
                            key={index}
                            card={card}
                            index={index}
                            onClick={handleCardClick}
                            roundInfo={roundInfo}
                        />
                    ))}
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-6xl mx-auto mt-8 text-center"
            >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <p className="text-blue-200 text-sm mb-2">Round Progress</p>
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3].map(round => (
                            <div
                                key={round}
                                className={`w-3 h-3 rounded-full ${round <= currentRound
                                        ? 'bg-green-400'
                                        : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default GameBoard