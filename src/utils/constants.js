export const GAME_CONFIG = {
    CARDS_PER_ROUND:8,
    MAX_ATTEMPTS: 2,
    ROUNDS: [
        {id:1,name:"Pokemon", api:"pokemon"},
        {id:2,name:"Digimon", api:"digimon"},
        {id:3,name:"Naruto", api:"naruto"}
    ]
}

export const API_ENDPOINTS = {
    pokemon: "https://pokeapi.co/api/v2/pokemon",
    digimon: "https://digi-api.com/api/v1/digimon",
    yugioh: "https://dattebayo-api.onrender.com/characters"
}