const vscode = require('vscode');

async function getGitExtension() {

    const gitExtension = vscode.extensions.getExtension('vscode.git');

    if (!gitExtension) {
        throw new Error("Git extension not found");
    }

    const git = gitExtension.exports.getAPI(1);

    return git;
}

async function getRepository() {

    const git = await getGitExtension();

    if (!git.repositories || git.repositories.length === 0) {
        throw new Error("No Git repository found");
    }

    return git.repositories[0];
}

async function getStagedDiff() {

    const repo = await getRepository();

    const stagedChanges = repo.state.indexChanges;

    if (!stagedChanges || stagedChanges.length === 0) {
        throw new Error("No staged changes found");
    }

    let fullDiff = "";

    for (const change of stagedChanges) {

        const diff = await repo.diffIndexWithHEAD(change.uri.fsPath);

        fullDiff += `\n--- File: ${change.uri.fsPath} ---\n`;
        fullDiff += diff;
        fullDiff += "\n";

    }

    return fullDiff;
}

module.exports = {
    getStagedDiff
};