'use strict';

// Import the necessary extensibility types to use in your code below
// The module 'vscode' contains the VS Code extensibility API
const
	vscode = require('vscode'),
	util = require('util'),
	DEFAULT_TOTALFORMAT = "Líns. %d",
	DEFAULT_SELECTEDFORMAT = " (%d Sel.)",
	DEFAULT_ALIGNMENT = "right",
	DEFAULT_PRIORITY = 200;

Object.defineProperty(exports, "__esModule", { value: true });

class LinesInfoStatusBar {
	constructor() {
		this.createExtensionStatusBarItem();
		vscode.window.onDidChangeVisibleTextEditors(e => e && this.showLinesInfo());
		vscode.window.onDidChangeTextEditorSelection(e => e && this.showLinesInfo(e.selections));
		vscode.window.onDidChangeTextEditorViewColumn(e => e && this.showLinesInfo(e.selections));
		vscode.workspace.onDidChangeConfiguration(e => {
			let modified = e.affectsConfiguration('linesinfostatusbar.totalDisplayFormat') || e.affectsConfiguration('linesinfostatusbar.selectedDisplayFormat') || e.affectsConfiguration('linesinfostatusbar.alignment') || e.affectsConfiguration('linesinfostatusbar.statusbarPriority');

			if (modified) {
				this.hideStatusBarItem();
				this.createExtensionStatusBarItem();
			}
		});

		if (vscode.window.activeTextEditor !== undefined) {
			this.showLinesInfo();
		}
	}

	createExtensionStatusBarItem() {
		this.alignConfig = vscode.workspace.getConfiguration('linesinfostatusbar').alignment || DEFAULT_ALIGNMENT;
		this.statusBarPriority = vscode.workspace.getConfiguration('linesinfostatusbar').statusbarPriority || DEFAULT_PRIORITY;
		this.totalDisplayFormat = vscode.workspace.getConfiguration('linesinfostatusbar').totalDisplayFormat || DEFAULT_TOTALFORMAT;
		this.selectedDisplayFormat = vscode.workspace.getConfiguration('linesinfostatusbar').selectedDisplayFormat || DEFAULT_SELECTEDFORMAT;
		this.statusBarItem =  vscode.window.createStatusBarItem(this.getAlignmentEnum(this.alignConfig), this.statusBarPriority);
	}

	hideStatusBarItem() {
		this.statusBarItem.hide();
	}

	showLinesInfo(selections) {
		// Get the current text editor
		let editor = vscode.window.activeTextEditor;

		if (!editor) {
			this.hideStatusBarItem();
			
			return;
		}

		// Create status bar item as needed
		if (!this.statusBarItem) {
			this.createExtensionStatusBarItem();
		}
				
		// Count total lines
		let lineCount = editor.document.lineCount;

		// Count selected lines
		let selectedText = '';
		
		if (selections) {
			let selectedCount = 0;

			selectedCount = selections.reduce(
				function (previous, selection) {
					if (selection.isEmpty) {
						return previous;
					}
					
					// Unary + operator transforms boolean to int
					return previous + selection.end.line - selection.start.line + ( +(selection.end.character != 0));
				}, 0); // pre = 0

				if (selectedCount) {
					selectedText = util.format(this.selectedDisplayFormat, selectedCount);
				}
		}

		// Update the status bar
		this.statusBarItem.text = util.format(this.totalDisplayFormat, lineCount) + selectedText;
		this.statusBarItem.show();
	}

	getAlignmentEnum(alignConfig) {
		if (alignConfig == 'left') {
			return vscode.StatusBarAlignment.Left;
		} else if (alignConfig == 'right') {
			return vscode.StatusBarAlignment.Right;
		} else {
			return vscode.StatusBarAlignment.Right;
		}
	}

	dispose() {
		this.statusBarItem.dispose();
	}
}

module.exports = LinesInfoStatusBar;
