const vscode = require('vscode');

function showInfo(message) {
    vscode.window.showInformationMessage(`CommitGenie: ${message}`);
}

function showError(message) {
    vscode.window.showErrorMessage(`CommitGenie Error: ${message}`);
}

function showWarning(message) {
    vscode.window.showWarningMessage(`CommitGenie Warning: ${message}`);
}

function showLoading(message) {
    return vscode.window.withProgress(
        {
            location: vscode.ProgressLocation.Notification,
            title: `CommitGenie: ${message}`,
            cancellable: false
        },
        async (progress) => {
            progress.report({ increment: 0 });
            return true;
        }
    );
}

module.exports = {
    showInfo,
    showError,
    showWarning,
    showLoading
};