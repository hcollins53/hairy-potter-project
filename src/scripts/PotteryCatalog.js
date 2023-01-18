//define and export a function-toSellOrNotToSell
//define an empty array
//accept the pottery as an input
//first check if the pottery is cracked or not
//if statement to check the weight
//add price property

let potterySold = []

export const toSellOrNotToSell = (potteryObj) =>{
    if(potteryObj.cracked === false){
    if(potteryObj.weight >= 6){
        potteryObj.price = 40
        potterySold.push(potteryObj)
    } else {
        potteryObj.price = 20
        potterySold.push(potteryObj)
    }
} else {
    console.log("cannot be sold")
}
    return potteryObj
}

export const usePottery = () => {

    return potterySold.map((potterySold) => ({...potterySold}));
}
