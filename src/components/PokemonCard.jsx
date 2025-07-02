import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PokemonCard = ({ card, index, onClick, roundInfo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(card.name)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-200 group"
        >
            <div className="text-center">
                <div className="mb-4 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-white/5">
                    <img 
                        src={card.img} 
                        alt={card.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                </div>
                <h3 className="text-white font-bold text-lg capitalize truncate">
                    {card.name}
                </h3>
                
                {/* Optional: Add round-specific styling */}
                <div className={`mt-2 w-full h-1 rounded-full bg-gradient-to-r ${roundInfo.color} opacity-50`} />
            </div>
        </motion.div>
    )
}

PokemonCard.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    roundInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }).isRequired
}

export default PokemonCard