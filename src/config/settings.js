require('dotenv').config();

const logger = require('../utils/logger');

function getGeminiApiKey() {

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        logger.error("GEMINI_API_KEY is missing in .env");
        throw new Error(
            "Gemini API key not found. Please add GEMINI_API_KEY to .env file."
        );
    }

    return apiKey;
}

function getGeminiModel() {

    // Future-proof: allows model switching later
    return process.env.GEMINI_MODEL || "gemini-pro";
}

function getExtensionName() {
    return "CommitGenie";
}

module.exports = {
    getGeminiApiKey,
    getGeminiModel,
    getExtensionName
};