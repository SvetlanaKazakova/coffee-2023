let coffeCup={
        name:'',
        water:'',
        cupsize:'',
    }
    console.log(coffeCup)
    //------------------------------------
    
    let coffeCup2={
        milk:'',
        __proto__:coffeCup,
        
    }
    console.log(coffeCup2)
    coffeCup2.name='Latte'
    console.log(coffeCup2.name)
    //------------------------------------
    
    let coffeCup3={
        __proto__:coffeCup2,
        'stepsOfcoffee':function(){
            console.log('Take a cup,put a coffee and water in it')
        }
    }
    console.log(coffeCup3)
    coffeCup3.name='Mocha'
    console.log(coffeCup3.name)
    coffeCup3.stepsOfcoffee()
