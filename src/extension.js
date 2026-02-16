const vscode = require('vscode');

const { generateCommitCommand } = require('./commands/generateCommitCommand');
const { registerSCMButton } = require('./ui/scmButton');

const logger = require('./utils/logger');
const { COMMANDS } = require('./utils/constants');

function activate(context) {

    logger.log("CommitGenie extension activated");

    // Register main command
    const commandDisposable = vscode.commands.registerCommand(
        COMMANDS.GENERATE_COMMIT,
        generateCommitCommand
    );

    // Register SCM UI integration
    registerSCMButton(context);

    context.subscriptions.push(commandDisposable);
}

function deactivate() {

    logger.log("CommitGenie extension deactivated");

}

module.exports = {
    activate,
    deactivate
};