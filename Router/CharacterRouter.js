const express = require("express");
const { getCharacter, getSearchData } = require("../Controller/Characters/CharactersController");
const router = express.Router();

router.get("/characters", getCharacter)
router.get("/characters/search", getSearchData)

module.exports = router;