export const GAME_CONFIG = {
    CARDS_PER_ROUND:8,
    MAX_ATTEMPTS: 2,
    ROUNDS: [
        {id:1,name:"Pokemon", api:"pokemon"},
        {id:2,name:"Digimon", api:"digimon"},
        {id:3,name:"Yu-Gi-Oh", api:"yugioh"}
    ]
}

export const API_ENDPOINTS = {
    pokemon: "https://pokeapi.co/api/v2/pokemon",
    digimon: "https://digimon-api.vercel.app/api/digimon",
    yugioh: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
}