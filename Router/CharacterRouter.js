const express = require("express");
const { getCharacter, getSearchData, getCharacterById, getHomeworld, getFilms,
    getVehicles, getStarships } = require("../Controller/Characters/CharactersController");
const router = express.Router();

router.get("/characters", getCharacter)
router.get("/characters/search", getSearchData)
router.get("/characters/:id", getCharacterById)
router.get("/characters/:id/homeworld", getHomeworld)
router.get("/characters/:id/films", getFilms)
router.get("/characters/:id/vehicles", getVehicles)
router.get("/characters/:id/starships", getStarships)

module.exports = router;