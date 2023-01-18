// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 5, 10)
//console.log(mug)
let bowl = makePottery("bowl", 7, 9)
let saladBowl = makePottery("salad bowl", 10, 16)
let mug2 = makePottery("mug", 2, 10)
let ceral = makePottery("bowl", 4, 7)

// Fire each piece of pottery in the kiln
let addedPottery = firePottery(mug, 2000)
//console.log(addedPottery)
let bowl2 = firePottery(bowl, 2300)
let saladBowlFired = firePottery(saladBowl, 1800)
let mug2Fired = firePottery(mug2, 2500)
let ceralFired = firePottery(ceral, 1900)
/*
console.log(bowl2)
console.log(saladBowlFired)
console.log(mug2Fired)
console.log(ceralFired)
*/

// Determine which ones should be sold, and their price
let mugSold = toSellOrNotToSell(mug)
console.log(mugSold)
let bowlSold = toSellOrNotToSell(bowl)
let saladBowlSold = toSellOrNotToSell(saladBowl)
let mug2Sold = toSellOrNotToSell(mug2)
let ceralSold = toSellOrNotToSell(ceral)
console.log(bowlSold)
console.log(saladBowlSold)
console.log(mug2Sold)
console.log(ceralSold)
// Invoke the component function that renders the HTML list

let HTMLElement = document.querySelector("#potteryList")
HTMLElement.innerHTML = potteryList()


