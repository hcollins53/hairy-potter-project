// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 32, 10)
console.log(mug)
let bowl = makePottery("bowl", 45, 9)
let saladBowl = makePottery("salad bowl", 60, 16)
let mug2 = makePottery("mug", 32, 10)
let ceral = makePottery("bowl", 23, 7)

console.log(bowl)
console.log(saladBowl)
console.log(mug2)
console.log(ceral)

// Fire each piece of pottery in the kiln
let addedPottery = firePottery(mug, 2000)
console.log(addedPottery)
let bowl2 = firePottery(bowl, 2300)
let saladBowlFired = firePottery(saladBowl, 1800)
let mug2Fired = firePottery(mug2, 2500)
let ceralFired = firePottery(ceral, 1900)
console.log(bowl2)
console.log(saladBowlFired)
console.log(mug2Fired)
console.log(ceralFired)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



