const axios = require("axios");
const { BadRequestError, NotFoundError } = require("../utils/errors");

const MARVEL_API_KEY = process.env.MARVEL_API_KEY;
const MARVEL_API_BASE = process.env.MARVEL_API_BASE;

const proxyRequest = async (req, res, endpoint) => {
  const fullUrl = `${MARVEL_API_BASE}${endpoint}`;

  try {
    const { data } = await axios.get(fullUrl, {
      params: {
        apiKey: MARVEL_API_KEY,
        ...req.query,
      },
    });

    if (!data) throw new NotFoundError("No data received from Marvel API");

    res.status(200).json(data);
  } catch (err) {
    if (err.response?.status === 404) {
      throw new NotFoundError("Marvel resource not found");
    }

    if (err.response?.status === 400) {
      throw new BadRequestError("Invalid parameters for Marvel API");
    }

    throw err;
  }
};

exports.getComics = async (req, res) => {
  return proxyRequest(req, res, "/comics");
};

exports.getComicById = async (req, res) => {
  const { comicId } = req.params;
  return proxyRequest(req, res, `/comic/${comicId}`);
};

exports.getComicsByCharacterId = async (req, res) => {
  const { characterId } = req.params;
  return proxyRequest(req, res, `/comics/${characterId}`);
};

exports.getCharacters = async (req, res) => {
  return proxyRequest(req, res, "/characters");
};

exports.getCharacterById = async (req, res) => {
  const { characterId } = req.params;
  return proxyRequest(req, res, `/character/${characterId}`);
};
