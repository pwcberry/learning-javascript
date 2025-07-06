/**
 * Codewars: Reverse words kata
 *
 * https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
 */
import {argv} from "node:process";

export function reverseWords(str) {
    const re = /([\w\p{P}]+)/ug;
    let result = String(str);
    let match;

    do {
        match = re.exec(str);
        if (match !== null) {
            const s = Array.from(match[0]).reverse().join("");
            const index = match.index;
            result = result.substring(0, index) + result.substring(index).replace(match[0], s);
        }
    } while(match !== null);

    return result;
}

function main(input) {
    if (input.length >= 1) {
        const result = reverseWords(input);

        console.log("Input: ", input);
        console.log("Result: ", result);
    } else {
        console.log("No input");
    }
}

main(argv[2]);
