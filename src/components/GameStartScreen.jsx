import { motion } from "framer-motion";
import { Play, Trophy, Zap, Target } from "lucide-react";
import { useGameStore } from "../store/gameStore";

const GameStartScreen = () => {
    const { startNewRound, totalScore } = useGameStore();
    
    const handleStartGame = () => {
        startNewRound(1);
    };
    
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center space-y-8"
            >
                {/* Hero Title */}
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
                        Multi-Verse
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                            Memory
                        </span>
                    </h1>
                    <p className="text-xl text-blue-200 mb-8">
                        Test your memory across Pokemon, Digimon & Naruto universes!
                    </p>
                </motion.div>

                {/* High Score */}
                {totalScore > 0 && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 mx-auto w-fit"
                    >
                        <Trophy className="text-yellow-400" size={28} />
                        <span className="text-white text-xl font-bold">Best Score: {totalScore}</span>
                    </motion.div>
                )}

                {/* Game Overview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div className="text-4xl mb-4">🎮</div>
                        <h3 className="text-white font-bold mb-2">Round 1: Pokemon</h3>
                        <p className="text-blue-200 text-sm">Start with classic Pokemon characters</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-white font-bold mb-2">Round 2: Digimon</h3>
                        <p className="text-blue-200 text-sm">Digital monsters await your memory</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div className="text-4xl mb-4">🥷</div>
                        <h3 className="text-white font-bold mb-2">Round 3: Naruto</h3>
                        <p className="text-blue-200 text-sm">Ninja characters test your limits</p>
                    </div>
                </motion.div>

                {/* Game Rules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
                >
                    <h3 className="text-white text-2xl font-bold mb-6">How to Play</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="flex items-start gap-3">
                            <Target className="text-green-400 mt-1" size={20} />
                            <div>
                                <p className="text-white font-semibold">Click Different Cards</p>
                                <p className="text-blue-200 text-sm">Never click the same character twice</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Zap className="text-yellow-400 mt-1" size={20} />
                            <div>
                                <p className="text-white font-semibold">Cards Shuffle</p>
                                <p className="text-blue-200 text-sm">Positions change after each click</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Trophy className="text-purple-400 mt-1" size={20} />
                            <div>
                                <p className="text-white font-semibold">Progress Through Rounds</p>
                                <p className="text-blue-200 text-sm">Complete all 3 universes to win</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-400 text-xl mt-1">❤️</span>
                            <div>
                                <p className="text-white font-semibold">2 Lives Per Round</p>
                                <p className="text-blue-200 text-sm">Fail twice and restart from beginning</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Start Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStartGame}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl text-xl flex items-center gap-3 mx-auto transition-all duration-200 shadow-lg"
                >
                    <Play size={24} />
                    Begin Your Journey
                </motion.button>
            </motion.div>
        </div>
    )
}

export default GameStartScreen