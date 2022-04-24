const { BooleanPrompt, Select, Input } = require('enquirer');
const { decode, encode } = require("./base64");
const { encrypt } = require('./md5');

const promptAction = new Select({
	name: 'actions',
	message: 'Pick a algorithm',
	choices: ['base64', 'md5']
});


const  promptBase64Decode = new BooleanPrompt({
	message:  'Is base64 Decode? (y/N)'
});

const  promptInput = new Input({
	message: 'What is your value?',
	initial: 'hello word'
});

const app = async() => {
	const action = await promptAction.run();
	const value = await promptInput.run();


	if(action === "base64") {
		const isBase64Decode = await promptBase64Decode.run();
		console.log(isBase64Decode ? decode(value) : encode(value));
	}
	if(action === "md5") {
		console.log(encrypt(value));
	}
}

app();
