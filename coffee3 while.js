// typeofCoffee = 'with milk'    //'with ice cream', 'with liquor'
// cupSize ='medium' //'small'    //'big''medium'
// topping = 'milk'    //'ice cream','liquor'
let typeofCoffee
let coffeeEspresso = 'Coffee espresso'
let coffeeWithMilk = 'Coffee with milk'
let coffeeWithIcecream ='with ice cream'
typeofCoffee = coffeeWithIcecream

let cupSize = 'medium size'
let smallSize= 'small size'
let mediumSize= 'medium size'
let bigSize

let price =5
// let priceSmallCup 
// let priceMediumCup = priceSmallCup 
// let priceBigCup = priceSmallCup 

let topping
let milk= 'milk'
let iceCream ='ice cream'
let sugar = 'sugar'
let liquor = 'liquor'

let water=100

let step0='You are welcome!'
let step1 = `1. Take a ${cupSize} cup`
 let step2 = '2. Put it in a cup of coffee'
let step3 =`3. Pour ${water}mg into a cup`
 let result = "Your coffee" +" "+`${typeofCoffee}`+" "+ " is ready.Price="+`${price}`
 
 let arrCupSize=['small size','medium size','big size']
for (i=0;i<arrCupSize.length;i++){
    if ( arrCupSize[i]    == "small size"){
        price =price
        water=water
             } else break
            
        if ( arrCupSize[i] == 'medium size'){
            price =price*1.5
         water=water*1.5
             } else break
           
        if ( arrCupSize[i] == 'big size'){
            price =price*2
         water=water*2
              }
}



console.log(step1,'\n',step2,'\n', step3,'\n',result)