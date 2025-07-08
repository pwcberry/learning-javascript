/**
 * A list of odds is given at 1 minute intervals. Find the maximum profit achievable in the time span given in the list.
 *
 * Profit margin is calculated in the difference between the odds at the time of outlay and at the time of cash out.
 */
import {strict as assert} from "node:assert";
import {round} from "../utils/math.js";

function getMaximumProfit(odds) {
    let outlay;
    let cashout = 0;
    let profit = 0;

    for (let i = 0, j = odds.length - 1; i < j; i += 1) {
        if ((typeof outlay === "undefined") || (odds[i] < outlay)) {
            outlay = odds[i];
        }

        if (odds[i + 1] > outlay) {
            cashout = odds[i + 1];
        }

        if ((cashout - outlay) > profit) {
            profit = cashout - outlay;
        }
    }

    // Avoid the floating-point inaccuracy
    return round(profit, 1);
}

/**
 * Calculate the greatest profit for a series of odds within a specified time window.
 *
 * @param odds {number[]}
 * @param duration {number}
 * @param delay {number}
 * @returns {number}
 */
function getMaximumProfitForTimeWindow(odds, duration = 3, delay = 0) {
    let outlay, outlayTime;
    let cashout = 0;
    let profit = 0;
    const oddsDuration = odds.length;

    for (let i = 0, j = oddsDuration - 1; i < j; i += 1) {
        if ((typeof outlay === "undefined") || (odds[i] < outlay)) {
            outlay = odds[i];
            outlayTime = i;
        }

        const windowStart = i + 1 + delay;
        const windowEnd = i + delay + duration;

        if (windowStart < oddsDuration) {
            for (let x = windowStart; x <= windowEnd; x += 1) {
                if (odds[x] > outlay) {
                    cashout = odds[x];
                }

                if ((cashout - outlay) > profit) {
                    profit = cashout - outlay;
                }
                console.log(" > ", x,":",cashout,":",profit);
            }
            outlay = outlayTime = undefined;
        }
    }

    // Avoid the floating-point inaccuracy
    return round(profit, 1);
}


function main() {
    assert.equal(getMaximumProfit([2.0, 1.8, 3.5, 1.1, 1.7]), 1.7);
    assert.equal(getMaximumProfit([2.0, 1.8, 3.5, 1.1, 2.7, 3.1, 1.2, 5.1]), 4);
    assert.equal(getMaximumProfit([2.0, 1.8, 3.7, 1.1, 2.7, 3.1, 1.2, 3.0]), 2);
    assert.equal(getMaximumProfitForTimeWindow([2.0, 1.8, 3.5, 1.1, 2.7, 3.1, 1.2, 5.1]), 3.9);
}

main();
