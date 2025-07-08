/**
 * Round a floating point number to a specified number of decimal points.
 *
 * @param value {number} The number to round
 * @param precision {number} The number of decimal places
 * @returns {number}
 */
function round(value, precision = 0) {
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}

export {
    round,
};
