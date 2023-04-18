//export default
 //import sandwichClass from "./sandwich.js"
 export default class SandwichClass{
    constructor(bread,cheese,topping){
        this.bread=bread;
        this.cheese=cheese;
        this.topping=topping
    }
    getSandwichName(){
        if(this.topping=='chicken'){
return 'Chicken Sandwich'
        }   else 
            if(this.topping=='becon'){
                return ' Sandwich with becon '
           }  else
            if(this.topping=='pepperroni'){
                return ' Sandwich with pepperoni '
           }
        }
        showSandwich(){
            if(this.topping=='becon'){
              console.log(`You choosed` +' '+ this.getSandwichName())
           } else if(this.topping=='chicken'){
            console.log(`You choosed` +' '+ this.getSandwichName())
         }else if(this.topping=='pepperoni'){
            console.log(`You choosed` +' '+ this.getSandwichName())
         } 
        }
shwoPrice(){
    let price=10
    if(this.topping=='becon'){
        console.log('Price you sandwich is:' + price*2)
    } else  if(this.topping=='chicken'){
        console.log('Price you sandwich is:' + price*1.5+ '$')
    }
}
    }
    let sandwichClass1=new SandwichClass('white bread','Sweet','becon')
    let sandwichClass2=new SandwichClass('white bread','Sweet','chicken')


   console.log(sandwichClass1.getSandwichName() ) 
   //console.log(sandwichClass2.getSandwichName() ) 
   sandwichClass1.showSandwich() 
   sandwichClass1.shwoPrice()

//    class steps extends SandwichClass{
//     constructor(bread,cheese,topping,stepNumber){
//         super(bread,cheese,topping)
//         this.stepNumber=stepNumber
//     }
//     recipeOfSandwich(){
//         console.log(`Your sandwich recipe: take slice of ${this.bread} them put slice of ${this.topping} and put slice of ${this.cheese}  `)
//     }
    
//    }
//    let steps1= new steps('white bread','Sweet cheese','becon','1')
//    steps1.recipeOfSandwich()