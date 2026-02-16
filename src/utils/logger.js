function log(message, data = null) {

    const timestamp = new Date().toISOString();

    if (data) {
        console.log(`[CommitGenie ${timestamp}] ${message}`, data);
    } else {
        console.log(`[CommitGenie ${timestamp}] ${message}`);
    }
}

function error(message, err = null) {

    const timestamp = new Date().toISOString();

    if (err) {
        console.error(`[CommitGenie ${timestamp}] ERROR: ${message}`, err);
    } else {
        console.error(`[CommitGenie ${timestamp}] ERROR: ${message}`);
    }
}

module.exports = {
    log,
    error
};