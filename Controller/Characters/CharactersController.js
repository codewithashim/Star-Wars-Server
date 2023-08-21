const axios = require('axios');

const getCharacter = async (req, res) => {
    try {
        const page = req.query.page || 1; // Get the requested page from the query string
        const search = req.query.search || ''; // Get the search query from the query string
        const apiUrl = `https://swapi.dev/api/people/?page=${page}&search=${search}`;

        const response = await axios.get(apiUrl);

        res.status(200).json({
            status: 200,
            message: "Success",
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            data: error
        });
    }
}

const getSearchData = async (req, res) => {
    try {
        const searchQuery = req.query.q || '';
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching for characters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getCharacterById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error getting character by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getHomeworld = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error getting homeworld by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getFilms = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error getting films by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getVehicles = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://swapi.dev/api/vehicles/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error getting vehicles by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getStarships = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error getting starships by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getCharacter,
    getSearchData,
    getCharacterById,
    getHomeworld,
    getFilms,
    getVehicles,
    getStarships
};
