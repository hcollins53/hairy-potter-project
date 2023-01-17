//Define a variable in the module to have the value of the primary key for each piece of pottery. 
//It should have an initial value of 1.
//define and export a function named makePottery
//make pottery will take in shape, weight, and height as parameters 
//return an object with shape, weight, height, and id properties
let priceKey = 1

export const makePottery = (shapeObject, weightObject, heightObject) => {
  
 return Object.create(null, {
    "id": {
        enumerable: true,
        value: priceKey++
    },
    "shape": {
        enumerable: true,
        value: shapeObject
    },
    "weight": {
        enumerable: true,
        value: weightObject
    },
    "height": {
        enumerable: true,
        value: heightObject
    }
});
}
