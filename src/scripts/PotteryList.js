//define and export a funtion
//get the items sold(pottery array) 
import { usePottery } from "./PotteryCatalog.js";
let potteryToBeSold = usePottery()


export const potteryList = () => {

    let potteryToBeSold = usePottery()

let html = '<article class= "potteryList">'

for (const pottery of potteryToBeSold) {
   html += `<section class ="pottery" id= "pottery---${pottery.id}">
                <h2 class="pottery_shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
                </section>`   
                    
}
html += '</article>'
console.log(html)
return html

}



