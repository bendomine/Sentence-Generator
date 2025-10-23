const rules = {
	s: [['np', 'vp']],
	np: [
		['n'],
		['det', 'n'],
		['adjp', 'n'],
		['n', 'pp'],
		['det', 'adjp', 'n'],
		['det', 'n', 'pp'],
		['adj', 'n', 'pp'],
		['det', 'adjp', 'n', 'pp']
	],
	vp: [
		['v'],
		['advp', 'v'],
		['v', 'pp'],
		['advp', 'v', 'pp'],

		['v', 'np'],
		['advp', 'v', 'np'],
		['v', 'np', 'pp'],
		['advp', 'v', 'np', 'pp']

		// ['v', 'adjp'],
		// ['advp', 'v', 'adjp'],
		// ['v', 'adjp', 'pp'],
		// ['advp', 'v', 'adjp', 'pp'],

		// ['v', 's'],
		// ['advp', 'v', 's']
	],
	adjp: [['adj'], ['advp', 'adj']],
	advp: [['adv'], ['advp', 'adv'], ['adv'], ['adv']],
	pp: [['p', 'np']]
};

const words = {
	n: [
		'cats',
		'dogs',
		'cars',
		'drugs',
		'computers',
		'birds',
		'houses',
		'robots',
		'humans',
		"Dwayne Johnson's eyebrows",
		'hands',
		'zebras',
		'teachers',
		'students',
		'programmers',
		'pirates',
		'ninjas',
		'samurais',
		'knights',
		'dragons',
		'wizards',
		'octopuses',
		'octopi',
		'aliens',
		'monsters'
	],
	v: [
		'exist',
		'run',
		'jump',
		'swim',
		'fly',
		'code',
		'sleep',
		'eat',
		'dance',
		'sing',
		'fight',
		'explore'
	],
	det: ['the', 'my', 'some', 'his', 'her', 'any', 'all', 'no'],
	adj: [
		'hairy',
		'brown',
		'red',
		'purple',
		'exorbitant',
		'fast',
		'slow',
		'smelly',
		'shiny',
		'dirty'
	],
	adv: [
		'really',
		'very',
		'quickly',
		'silently',
		'well',
		'badly',
		'happily',
		'sadly',
		'angrily',
		'eagerly',
		'gracefully',
		'clumsily',
		'awkwardly',
		'enthusiastically',
		'reluctantly',
		'stealthily'
	],
	p: [
		'in',
		'with',
		'on',
		'near',
		'at',
		'against',
		'by',
		'about',
		'for',
		'to',
		'from',
		'of',
		'like',
		'after',
		'before'
	]
};

function generate() {
	let sentence = ['np', 'vp'];

	for (let i = 0; i < sentence.length; ++i) {
		let options = rules[sentence[i]];
		if (options) {
			let index = Math.floor(Math.random() * options.length);
			let rule = options[index];
			sentence = insertRule(sentence, i, rule);

			i--;
		}
	}
	let output = replaceWords(sentence);

	output = output[0].toUpperCase() + output.slice(1);
	output += '.';

	document.querySelector('#sentence').textContent = output;
}

function insertRule(sentence, position, rule) {
	return sentence.toSpliced(position, 1, ...rule);
}

function replaceWords(sentence) {
	let out = '';
	for (let i = 0; i < sentence.length; ++i) {
		let index = Math.floor(Math.random() * words[sentence[i]].length);
		out += words[sentence[i]][index] + ' ';
	}
	return out.trim();
}

