// extension.js
const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
    vscode.window.showInformationMessage('Hello World from My Extension!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
