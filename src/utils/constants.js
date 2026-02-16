const EXTENSION_ID = "commitgenie";

const COMMANDS = {
    GENERATE_COMMIT: "commitgenie.generateCommit"
};

const GEMINI = {
    BASE_URL: "https://generativelanguage.googleapis.com/v1beta/models",
    DEFAULT_MODEL: "gemini-pro",
    MAX_TOKENS: 200,
    TEMPERATURE: 0.2
};

const UI = {
    SOURCE_CONTROL_VIEW: "scm",
    BUTTON_GROUP: "navigation"
};

module.exports = {
    EXTENSION_ID,
    COMMANDS,
    GEMINI,
    UI
};