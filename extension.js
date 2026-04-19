const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const emojis = [
		{ name: "smile", icon: "😀" },
		{ name: "laugh", icon: "😂" },
		{ name: "cool", icon: "😎" },
		{ name: "heart", icon: "❤️" },
		{ name: "fire", icon: "🔥" },
		{ name: "rocket", icon: "🚀" },
		{ name: "star", icon: "⭐" },
		{ name: "sparkles", icon: "✨" },
		{ name: "check", icon: "✅" },
		{ name: "cross", icon: "❌" },
		{ name: "warning", icon: "⚠️" },
		{ name: "idea", icon: "💡" },
		{ name: "note", icon: "📝" },
		{ name: "pin", icon: "📌" },
		{ name: "book", icon: "📚" },
		{ name: "target", icon: "🎯" },
		{ name: "search", icon: "🔍" },
		{ name: "money", icon: "💰" },
		{ name: "time", icon: "⏰" },
		{ name: "chartup", icon: "📈" },
		{ name: "chartdown", icon: "📉" },
		{ name: "key", icon: "🔑" },
		{ name: "chat", icon: "💬" },
		{ name: "brain", icon: "🧠" },
		{ name: "point", icon: "👉" },

		{ name: "bug", icon: "🐛" },
		{ name: "fix", icon: "🔧" },
		{ name: "lock", icon: "🔒" },
		{ name: "package", icon: "📦" },
		{ name: "test", icon: "🧪" },
		{ name: "refresh", icon: "♻️" },
		{ name: "pending", icon: "⏳" },
		{ name: "code", icon: "💻" },
		{ name: "server", icon: "🖥️" },
		{ name: "database", icon: "🗄️" },
		{ name: "link", icon: "🔗" },
		{ name: "shield", icon: "🛡️" },

		{ name: "skull", icon: "💀" },
		{ name: "party", icon: "🎉" },
		{ name: "clap", icon: "👏" },
		{ name: "thumbsup", icon: "👍" },
		{ name: "thumbsdown", icon: "👎" },
		{ name: "ok", icon: "👌" },
		{ name: "wave", icon: "👋" },
		{ name: "eyes", icon: "👀" },
		{ name: "sleep", icon: "😴" },
		{ name: "sad", icon: "😢" },
		{ name: "angry", icon: "😡" },
		{ name: "love", icon: "😍" },
		{ name: "thinking", icon: "🤔" },
		{ name: "mindblown", icon: "🤯" },
		{ name: "robot", icon: "🤖" },

		// New Added Emojis 🚀
		{ name: "pray", icon: "🙏" },
		{ name: "muscle", icon: "💪" },
		{ name: "crown", icon: "👑" },
		{ name: "gem", icon: "💎" },
		{ name: "coffee", icon: "☕" },
		{ name: "pizza", icon: "🍕" },
		{ name: "burger", icon: "🍔" },
		{ name: "cake", icon: "🎂" },
		{ name: "gift", icon: "🎁" },
		{ name: "camera", icon: "📷" },
		{ name: "phone", icon: "📱" },
		{ name: "laptop", icon: "💻" },
		{ name: "wifi", icon: "📶" },
		{ name: "globe", icon: "🌍" },
		{ name: "moon", icon: "🌙" },
		{ name: "sun", icon: "☀️" },
		{ name: "rainbow", icon: "🌈" },
		{ name: "snow", icon: "❄️" },
		{ name: "music", icon: "🎵" },
		{ name: "headphone", icon: "🎧" },
		{ name: "game", icon: "🎮" },
		{ name: "car", icon: "🚗" },
		{ name: "bike", icon: "🏍️" },
		{ name: "plane", icon: "✈️" },
		{ name: "train", icon: "🚆" },
		{ name: "medal", icon: "🏅" },
		{ name: "trophy", icon: "🏆" },
		{ name: "ball", icon: "⚽" },
		{ name: "basketball", icon: "🏀" },
		{ name: "dice", icon: "🎲" },
		{ name: "magnet", icon: "🧲" },
		{ name: "hammer", icon: "🔨" },
		{ name: "gear", icon: "⚙️" },
		{ name: "flash", icon: "⚡" },
		{ name: "drop", icon: "💧" },
		{ name: "leaf", icon: "🍃" },
		{ name: "flower", icon: "🌸" },
		{ name: "ghost", icon: "👻" },
		{ name: "alien", icon: "👽" },
		{ name: "unicorn", icon: "🦄" },
		{ name: "monkey", icon: "🐵" },
		{ name: "cat", icon: "🐱" },
		{ name: "dog", icon: "🐶" }
	];

	const provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file' },
		{
			provideCompletionItems(document, position) {

				const wordRange = document.getWordRangeAtPosition(
					position,
					/:?[a-zA-Z0-9_]+/
				);

				return emojis.map(item => {

					const completion = new vscode.CompletionItem(
						item.name,
						vscode.CompletionItemKind.Text
					);

					completion.label = `${item.name} ${item.icon}`;
					completion.insertText = item.icon;
					completion.detail = `Insert ${item.icon}`;
					completion.filterText = item.name;

					if (wordRange) {
						completion.range = wordRange;
					}

					return completion;
				});
			}
		},
		':'
	);

	context.subscriptions.push(provider);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};