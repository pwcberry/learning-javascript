/**
 * Codewars: Coloured Triangles kata
 *
 * https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111
 */
import {argv} from "node:process";

function contactResult(...colors) {
    if (colors.length === 1) {
        return colors[0];
    } else if (colors.length === 2) {
        const input = `${colors[0]}${colors[1]}`;
        switch (input) {
            case "RR":
                return "R";
            case "BB":
                return "B";
            case "GG":
                return "G";
            case "BG":
            case "GB":
                return "R";
            case "RG":
            case "GR":
                return "B";
            case "BR":
            case "RB":
                return "G";
            default:
                return "";
        }
    }
    return "";
}

function processInput(input) {
    const rows = [input];
    let count = 0;
    while (rows[count].length > 1) {
        let step = "";
        for (let i = 1, j = rows[count].length; i < j; i += 1) {
            step += contactResult(rows[count][i - 1], rows[count][i]);
        }
        count += 1;
        rows[count] = step;
    }

    return rows;
}

function main(input) {
    if (input.length >= 1) {
        const result = processInput(input);

        console.log("Steps:\n");
        result.forEach((row, index) => {
            console.log(`${"".padEnd(index, " ")}${row.replace(/([RGB])(?=[RGB])/g, "$1 ")}`);
        });
        console.log("\nResult: ", result[result.length - 1]);
    } else {
        console.log("No input");
    }
}

main(argv[2]);
