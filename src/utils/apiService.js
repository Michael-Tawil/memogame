import axios from "axios"

export const getPokemonData = async () => {
    let response;
    let temparr = []
    let randNumHistory = [];
    while (temparr.length < 8) {
        let randomNum = Math.floor(Math.random() * 1010) + 1

        if (!randNumHistory.includes(randomNum)) {
            randNumHistory.push(randomNum)
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
            temparr.push({ name: response.data.name, img: response.data.sprites.front_default })
        }
    }

    return temparr
}

export const getDigimonData = async () => {
    let response;
    let temparr = []
    let randNumHistory = [];
    while (temparr.length < 8) {
        let randomNum = Math.floor(Math.random() * 1488) + 1

        if (!randNumHistory.includes(randomNum)) {
            randNumHistory.push(randomNum)
            response = await axios.get(`https://digi-api.com/api/v1/digimon/${randomNum}`)
            temparr.push({ name: response.data.name, img: response.data.images[0].href })
        }
    }

    return temparr
}

export const getNarutoData = async () => {
    let response;
    let temparr = []
    let randNumHistory = [];
    while (temparr.length < 8) {
        let randomNum = Math.floor(Math.random() * 1431) + 1

        if (!randNumHistory.includes(randomNum)) {
            randNumHistory.push(randomNum)
            response = await axios.get(`https://dattebayo-api.onrender.com/characters/${randomNum}`)
            temparr.push({ name: response.data.name, img: response.data.images[0]})
        }
    }

    return temparr
}