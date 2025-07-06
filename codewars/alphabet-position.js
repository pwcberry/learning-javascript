/**
 * CodeWars: Replace With Alphabet Position
 *
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 */
import {argv} from "node:process";

const UPPER_CASE_A_CODE = "A".charCodeAt(0); // 65

function replaceWithAlphabetPosition(text) {
    return Array.from(text).reduce((acc, c) => {
        const code = c.toUpperCase().charCodeAt(0) - UPPER_CASE_A_CODE + 1;
        if ((code >= 1) && (code <= 26)) {
            acc.push(String(code));
        }
        return acc;
    }, []).join(" ");
}

function main(input) {
    const result = replaceWithAlphabetPosition(input);
    console.log("Input:  ", input);
    console.log("Output: ", result);
}

main(argv[2]);
