// Javascript ---> EcmaScript

// Last    ---> ES5
// Current ---> ES6

// console.log("Hello");
// console.log("Good evening");

// Variables:

// amount_one_from_dubai = 10000;
// amountOneFromDubai = 2000;
// AmountOneFromDubai = 2;

// console.log(amount_one_from_dubai);
// console.log(amountOneFromDubai);
// console.log(AmountOneFromDubai);

// Datatypes:

// a = "hello"
// a = 100
// a = false
// let a
// a = null


// console.log(a, typeof a);

// Operators:

    // 1. Arithmetic OP

        // (+, -, *, /, **, %, ++, --)

        // a = 5

        // result = a + 3
        // result = a - 3
        // result = a * 3
        // result = a / 3
        // result = a ** 3
        // result = a % 3
        // result = ++a
        // result = --a

        // console.log(result);
    
    // 2. Assignment OP

        // (=, +=, -=, *=, /=, %=, **=)

        // a = 5

        // a += 7    // a = a + 7
        // a -= 7    // a = a - 7
        // a *= 7    // a = a * 7
        // a /= 7    // a = a / 7
        // a %= 7    // a = a % 7
        // a **= 7    // a = a ** 7

        // console.log(a);

    // 3. Comparison OP  --> Returning the Boolean values

        // ( ==, ===, !=, !==, >, >=, <, <=, ? )

        // age = 5

        // result = (age == 5)
        // result = (a === 5)
        // result = (a != 5)
        // result = (a !== 5)
        // result = (a > 5)
        // result = (a >= 5)
        // result = (a < 5)
        // result = (age <= 18)
        // result = (age >= 18) ? "Your Eligible for Voting" : "Not Eligible"

        // console.log(result);
        
    // 4. String OP

    // txt1 = "hello"
    // txt2 = "hello"

    // result = txt1 + " " + txt2

    // console.log(result);   


    // 5. Logical OP

        // (&&, ||, !)

        // &&

            // (true)  && (true)   ==> true
            // (true)  && (false)  ==> false
            // (false) && (true)   ==> false
            // (false) && (false)  ==> false

        
            // age = 18

            // result = (age >= 18) && (age == 18)

            // console.log(result);
            

            // ||

            // (true)  || (true)   ==> true
            // (true)  || (false)  ==> true
            // (false) || (true)   ==> true
            // (false) || (false)  ==> false

            // !

            // (true)   ====> false

            // age = 15

            // result = (age >= 18) || (age == 18)

            // console.log(!result);

    // 7. Ternary OP
    // 8. Type OP

// Hoisting --> (Declaration)

// ES5

    // var

        // var a = 10

        // var a = 20

        // console.log(a);
    

// ES6

    // let

        // let a

        // a = 20

        // console.log(a);
    
    // const

        // const a = 20

        // console.log(a);
    

// Scope: 

    // Global scope

        // {
        //    var a = 10
        
        //    console.log("inside: ", a);
        
        // }

        //  console.log("outside: ", a);

    // Local scope

        // {
        //   let a = 10;

        //   console.log("inside: ", a);
        // }

        // console.log("outside: ", a);




{
    {
        {
            let a = 100
            {
                {
                    {
                        {
                            {
                                console.log(a);
                                
                            }
                        }
                    }
                }
                console.log(a);
                
            }
        }
    }
}

console.log(a);
