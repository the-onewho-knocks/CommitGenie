const vscode = require('vscode');
const logger = require('../utils/logger');
const { COMMANDS } = require('../utils/constants');

function registerSCMButton(context) {

    try {

        logger.log("Registering SCM button");

        const disposable = vscode.commands.registerCommand(
            COMMANDS.GENERATE_COMMIT,
            async () => {

                logger.log("SCM button clicked");

                await vscode.commands.executeCommand(
                    COMMANDS.GENERATE_COMMIT
                );

            }
        );

        context.subscriptions.push(disposable);

    } catch (err) {

        logger.error("Failed to register SCM button", err);

    }

}

module.exports = {
    registerSCMButton
};