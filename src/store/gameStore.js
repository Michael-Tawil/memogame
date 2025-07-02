import { create } from "zustand";
import { getPokemonData, getDigimonData, getNarutoData } from "../utils/apiService";
import { shuffleArray } from "../utils/shuffle";

export const useGameStore = create((set, get) => ({
    currentRound: 1,
    attemptsLeft: 2,
    totalScore: 0,
    selectedCards: [],
    currentRoundCards: [],
    gameStatus: 'start',
    loadingState: false,

    startNewRound: async (roundNumber) => {
        set({ loadingState: true, gameStatus: 'playing'})

        let fetchedData;
        switch (roundNumber) {
            case 1:
                fetchedData = await getPokemonData()
                break;
            case 2:
                fetchedData = await getDigimonData()
                break;
            case 3:
                fetchedData = await getNarutoData()
                break;
            default:
                console.error("Invalid round number")
                return;

        }

        set({
            currentRoundCards: fetchedData,
            loadingState: false,
            gameStatus: 'playing'
        })

    },
    handleCardClick: (cardName) => {
        const { selectedCards, totalScore, currentRoundCards } = get()
 
        if (selectedCards.includes(cardName)) {

            const { attemptsLeft } = get()

            if (attemptsLeft > 1) {

                set({
                    attemptsLeft: attemptsLeft - 1,
                    selectedCards: [],
                    gameStatus: 'playing',
                    currentRoundCards: shuffleArray(currentRoundCards)

                })

            } else {

                set({
                    currentRound: 1,
                    attemptsLeft: 2,
                    totalScore: 0,
                    selectedCards: [],
                    gameStatus: 'playing'
                })

                get().startNewRound(1)
            }
        } else {

            set({
                selectedCards: [...selectedCards, cardName],
                totalScore: totalScore + 1,
                currentRoundCards: shuffleArray(currentRoundCards)
            })
if ([...selectedCards, cardName].length === 8) {
    const { currentRound } = get()
    
    console.log('Round completed! Current round:', currentRound);  // ✅ Add this
    
    if (currentRound < 3) {
        console.log('Advancing to round:', currentRound + 1);  // ✅ Add this
        
        set({
            selectedCards: [],
            attemptsLeft: 2,
            currentRound: currentRound + 1
        })
        
        console.log('Calling startNewRound with:', currentRound + 1);  // ✅ Add this
        get().startNewRound(currentRound + 1)
    } else {
        set({ gameStatus: 'victory' })
    }
}
        }

    }
}))