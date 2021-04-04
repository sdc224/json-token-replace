/**
 * Example and Test
 * =====================
 * How this utility work
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

// If you use npm repository: require("@ptkdev/json-token-replace");
let Jtr = require("../modules/jtr");
let jtr = new Jtr();

// Import json with token<->value
let json_tokens = require("./json_tokens.json");

// Import full json with token {{test}}
let json_sample = require("./json_sample.json");

// This is where the magic happens
let json_output = jtr.replace(json_tokens, json_sample, "{{", "}}");

function findDiff(str1, str2) {
	let diff = "";
	str2.split("").forEach((val, i) => {
		if (val != str1.charAt(i)) {
			diff += val;
		}
	});
	return diff;
}

console.log(findDiff(json_output.text, json_sample.text));

// Test output
console.log(json_output);
