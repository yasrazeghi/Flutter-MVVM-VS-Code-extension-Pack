import * as vscode from 'vscode';

export class Utils {
    public static isValidClassName(className: string): string | undefined {
        if (className.length === 0) {
            return "File name should have atleast 1 character";
        }
        if (className.toLowerCase() === "view") {
            return "View is not a valid file name";
        }
        if (
            !className
                .substring(0, 1)
                .match(new RegExp("([a-zA-Z$][w$]*.)*[a-zA-Z_$][w$]*"))
        ) {
            return "Invalid class name format";
        }
        return undefined;
    }

    public static openFile(filePath: string) {
        console.info(`openFile: ${filePath}`);
        let openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((document) => {
            vscode.window.showTextDocument(document);
        });
    }
}