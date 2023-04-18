let typeofCoffee
let cupSize
let topping
let water=100
let price = 5
typeofCoffee = 'with milk'    //'with ice cream', 'with liquor'
cupSize ='medium' //'small'    //'big''medium'
topping = 'milk'    //'ice cream','liquor'
//console.log(cupSize)

if (cupSize == "small"){
price=price*1
     }
if (cupSize == "medium"){
price = price*1.5
 water=water*1.5
     }
if (cupSize == "big"){
price=price*2
 water=water*2
      }
let step1 = `1. Take a ${cupSize} cup`
 let step2 = '2. Put it in a cup of coffee'
let step3 =`3. Pour ${water}mg into a cup`
 let result = "Your coffee" +" "+`${typeofCoffee}`+" "+ " is ready.Price="+`${price}`
console.log(step1,'\n',step2,'\n', step3,'\n',result)