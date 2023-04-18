import SandwichClass from "./sandwich1.js"
    class steps extends SandwichClass{
        constructor(bread,cheese,topping,stepNumber){
            super(bread,cheese,topping)
            this.stepNumber=stepNumber
    }
    recipeOfSandwich(){
        console.log(`Your sandwich recipe: take slice of ${this.bread} them put slice of ${this.topping} and put slice of ${this.cheese}  `)
    }
    
   }
   let steps1= new steps('white bread','Sweet cheese','becon','1')
   steps1.recipeOfSandwich()