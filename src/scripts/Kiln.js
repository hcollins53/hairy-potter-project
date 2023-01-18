
//define a function named firePottery
//input piece of pottery returned in makePottery
//input a number 
//add a new property to object (fired = true)
// =add a new property of cracked if temp 
//return object


import { makePottery } from "./PotteryWheel.js";
let pottery = makePottery()

export const firePottery = (pottery, temperature) => {
    pottery.fired = true
    if (temperature > 2200) {
        pottery.cracked = true
    }
    else {
        pottery.cracked = false
    }
    return pottery
}