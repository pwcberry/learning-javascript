/**
 * Codewars: Is Prime
 */
import { argv } from "node:process";

export function isPrime(input) {
  let result = true;
  if (input < 2 || (input > 2 && input % 2 === 0)) {
    result = false;
  } else {
    const root = Math.floor(Math.sqrt(input));

    for (let i = 2; i <= root; i += 1) {
      const remainder = input % i;
      if (remainder === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
}

function main(input) {
  const inputNumber = Number.parseInt(input);
  if (!isNaN(inputNumber)) {
    const result = isPrime(inputNumber);
    console.log("Input:    ", input);
    console.log("Is prime: ", result);
  } else {
    console.log("You must input an integer");
  }
}

main(argv[2]);
