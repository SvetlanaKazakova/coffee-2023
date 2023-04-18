function greeting1(name){
    console.log(`Hello ${name}. Have you a coffee? \n`) 
    console.log('We have:')
}


function showCupSize(){
    let smallSizeCup= 'small size of coffee'
    let mediumSizeCup= 'medium size of coffee'
    let bigSizeCup= 'big size of coffee'
    let price=5
    let priceForSizeCup= [[smallSizeCup,price],[mediumSizeCup,price*1.5],[bigSizeCup,price*2]]
    for(let i=0; i<priceForSizeCup.length; i++){
        console.log(priceForSizeCup[i][0]+ '-' + priceForSizeCup[i][1] + '$')
        if (i ==priceForSizeCup.length-1){
            console.log('\n')
            }
        }
    
}
function showTypeOfCoffeeAndIngredient (){
let beansCoffe= 'beans of Coffe'
let coffeeEspresso = 'Coffee espresso'
let coffeeWithMilk = 'Coffee with milk'
let coffeeWithIcecream ='Coffe with ice cream'
let topping
let milk= 'milk'
let iceCream ='ice cream'
let sugar = 'sugar'
let liquor = 'liquor'

let water=100
let espressoIngredient= `${coffeeEspresso}: \n 30 gr ${beansCoffe} and hot water \n`
let coffeeWithMilkInIngredient= `${coffeeWithMilk}: \n 20 gr ${beansCoffe} , hot water and 100gr ${milk} \n`
let coffeeWithIcecreamIngredient= `${coffeeWithIcecream}: \n 20 gr ${beansCoffe} , hot water and 100gr ${iceCream}\n`
console.log("Please shoose type of coffee: \n")

let typeOfCoffee =[espressoIngredient,coffeeWithMilkInIngredient,coffeeWithIcecreamIngredient]


for(let i=0;i<typeOfCoffee.length;i++){
    console.log(typeOfCoffee[i])
}
}

function getCupPrice(cupSize){
    let price=5
    if(cupSize== 'small'){
        return price
    }
    else
        if(cupSize== 'medium'){
            return price*1.5
        }else
            if(cupSize== 'big'){
                return price*2
            }
        
}
function toppingCoffee(topping){
    // let milk='milk'
    // let iceCream = 'ice cream'
    if(topping=='milk'){
        return 'Coffe with milk'
    }else 
    if(topping == 'ice cream'){
        return 'Coffe ice cream'

    }
}

function showRecipeOfCoffe(cupSize,topping){
let price=getCupPrice(cupSize)
let topping1=toppingCoffee(topping)
let shoose =  `You shoose a ${cupSize} cup of ${topping1} \n` //cup of ${typeofCoffee}\n`
// let step1 = `1. Take a ${cupSize} cup`
//  let step2 = `2. Put it in a cup of ${beansCoffe}`
// let step3 =`3. Pour ${water}mg into a cup`
 let result = "Your coffee" +" "+ " is ready."
 console.log(shoose + result)
}




greeting1('Svetlana')
showCupSize()
showTypeOfCoffeeAndIngredient()
showRecipeOfCoffe('big','milk')
 console.log ('Price'+ ' ' + getCupPrice('big') +'$')