const axios = require('axios');
const settings = require('../config/settings');
const logger = require('../utils/logger');

async function generateCommitMessage(diff) {

    if (!diff || diff.trim().length === 0) {
        throw new Error("No diff provided");
    }

    const apiKey = settings.getGeminiApiKey();
    const model = settings.getGeminiModel();

    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const prompt = `
You are an expert software engineer.

Generate a concise git commit message based on this diff.

Rules:
- Use conventional commit format
- Max 72 characters
- No explanation
- Only output commit message

Diff:
${diff}
`;

    try {

        logger.log("Sending diff to Gemini");

        const response = await axios.post(url, {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        });

        const message =
            response.data.candidates[0].content.parts[0].text.trim();

        logger.log("Gemini response received", message);

        return message;

    } catch (err) {

        logger.error("Gemini API failed", err.response?.data || err);

        throw new Error("Gemini failed to generate commit message");
    }
}

module.exports = {
    generateCommitMessage
};