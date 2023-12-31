const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
//const API_KEY = "henrystaff";

const getCharById = (res, id) => {
    const { id } = req.params;
    axios
        .get(`${URL}/${id}`)
        // Esto retorna una promesa => pending
        .then(response => response.data)
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                location: data.location
            };
            return res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
                .writeHead(500, { "Content-type": "application/json" })
                .end(JSON.stringify({message: error.message}))
            });
};

module.exports = getCharById;