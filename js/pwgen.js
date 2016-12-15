const SOURCE_TEXT = `He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eightyfour days now without taking a fish In the first forty days a boy had been with him But after forty days without a fish the boys parents had told him that the old man was now definitely and finally salao which is the worst form of unlucky and the boy had gone at their orders in another boat which caught three good fish the first week It made the boy sad to see the old man come in each day with his skiff empty and he always went down to help him carry either the coiled lines or the gaff and harpoon and the sail that was furled around the mast The sail was patched with flour sacks and furled it looked like the flag of permanent defeat The old man was thin and gaunt with deep wrinkles in the back of his neck The brown blotches of the benevolent skin cancer the sun brings from its reflection on the tropic sea were on his cheeks The blotches ran well down the sides of his face and his hands had the deepcreased scars from handling heavy fish on the cords But none of these scars were fresh They were as old as erosions in a fishless desert Everything about him was old except his eyes and they were the same color as the sea and were cheerful and undefeated Santiago the boy said to him as they climbed the bank from where the skiff was hauled up I could go with you again Weve made some money The old man had taught the boy to fish and the boy loved him No the old man said Youre with a lucky boat Stay with them But remember how you went eightyseven days without fish and then we caught big ones every day for three weeks I remember the old man said I know you did not leave me because you doubted It was papa made me leave I am a boy and I must obey him I know the old man said It is quite normal He hasnt much faith No the old man said But we have Havent we ‘Yes the boy said Can I offer you a beer on the Terrace and then well take the stuff home Why not the old man said Between fishermen They sat on the Terrace and many of the fishermen made fun of the old man and he was not angry Others of the older fishermen looked at him and were sad But they did not show it and they spoke politely about the current and the depths they had drifted their lines at and the steady good weather and of what they had seen The successful fishermen of that day were already in and had butchered their marlin out and carried them laid full length across two planks with two men staggering at the end of each plank to the fish house where they waited for the ice truck to carry them to the market in Havana Those who had caught sharks had taken them to the shark factory on the other side of the cove where they were hoisted on a block and tackle their livers removed their fins cut off and their hides skinned out and their flesh cut into strips for salting`;
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
const PASSWORD_LENGTH = 8;

	constructor(srcText) {
		this._dictionary = srcText.split(' ');
	}

	generate() {
		let password = '';
		while (password.length < PASSWORD_LENGTH) {
			let randomWordIndex = Math.floor(Math.random() * this._dictionary.length);
			let encodedWord = this._encodeWord(this._dictionary[randomWordIndex]);
			password += this._capitalizeWord(encodedWord);
		}
		return password;
	}

	_capitalizeWord(word) {
		return word[0].toUpperCase() + word.slice(1);
	}

	_encodeWord(word) {
		let encodedPassword = '';
		for (let i = 0; i < word.length; ++i) {
			encodedPassword += VOWELS.includes(word[i]) ? VOWELS[Math.floor(Math.random() * VOWELS.length)]
																									: CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
		}
		return encodedPassword;
	}
}

const passwordField = document.getElementById("pswrd");
passwordField.innerHTML = generator.generate();
const range = document.createRange();
range.selectNode(passwordField);
window.getSelection().addRange(range);
