//sandwich
let bread='black bread'
let cheese='Swiss cheese'
let turkey='smoked turkey'
let salmon='smoked salmon'
let chicken='bolied chicken'
let tomato='dried tomatoes'
let pepperoni = 'pepperoni'

///1

let chickenSandwich={
    typeofSandwich:'sandwich with chicken',
    bread:'black', 
    cheese: 'swiss cheese',
    tomato:'tomatoes',
    topping:"chicken",
}
let salmonSandwich={
    typeofSandwich:'sandwich with salmon',
    bread:'white',
    cheese: 'swiss cheese',
    topping:"salmon",
}
let pepperoniSandwich={
    typeofSandwich:'sandwich with pepperoni',
    bread:'white',
    cheese: 'swiss cheese',
    topping:"pepperoni",
    tomato:'tomatoes',
}
let sandwichName={
    chicken:'sandwich with chicken',
    salmon:'sandwich with salmon',
    pepperoni:'sandwich with pepperoni',
}
function sandwicIngridients(topping){
    console.log(`You  ${sandwichName[topping]} consists of:`)
    if(topping=='chicken'){
       for(let key in chickenSandwich) {
        console.log(key+':'+ chickenSandwich[key])
       }

    }
    if(topping=="salmon"){
        for(let key in salmonSandwich) {
         console.log(key+':'+ salmonSandwich[key])
        }
 
     }
     if(topping=="pepperoni"){
        for(let key in pepperoniSandwich) {
         console.log(key+':'+ pepperoniSandwich[key])
        }
 
     }
}
sandwicIngridients("pepperoni")
 let price=10
 function priceofSandwich(topping){
    if(topping=="pepperoni"){
        console.log(`The price of your Sandwich with ${topping} is:${price}`)
    }else if(topping=='chicken'){
        console.log(`The price of your Sandwich with ${topping} is:${price*1.5}`)
    } else if(topping=="salmon"){
        console.log(`The price of your Sandwich with ${topping} is:${price*2} $`)
    }
 }
 priceofSandwich("pepperoni")