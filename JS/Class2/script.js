// Hoisting:

// ES5:

    // var

        // var a = 10

        // var a = 20

        // console.log(a);

// ES6:

    // let: 

        // let a = 10

        // console.log(a);

        // a = 20

        // console.log(a);

    // Const

        // const a = 10

        // // a = 20

        // console.log(a);
        
// scope:

    // Global scope --> var
    // Local scope --> let, const


    // {
    //     let a = 10;
        

    //     console.log("inside: ", a);
        
    // }

    // console.log("outside: ", a);

// Functions:

// function fname(){             // function definition
//     console.log(3 * 5);
// }


// fname()                     // function call

// Parameterised functions:

// function mul(a){
//     console.log(a * 2);
// }

// mul(50);
// mul(100);


function mul(a){
   return a * 2   
}

let result = mul(99)

console.log(result);
