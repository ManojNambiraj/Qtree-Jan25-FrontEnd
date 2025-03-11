// let fruits = ["apple", "banana", "orange", "kiwi", "grapes"]

    // console.log(fruits[1]);
    // console.log(fruits[2]);
    // console.log(fruits[0]);

// Array Destructuring:

    // const [x, z, k, g] = fruits

    // console.log(x);
    // console.log(k);


// Object

// let student1 = {
//     name: "Kavitha",
//     age: 25,
//     dept: "IT",
//     college: "XYZ"
// }

// console.log(student1);
// // console.log(student1.name);
// // console.log(student1.age);


// // Object Destructuring:

//     let {name, age, dept, college} = student1

//     college = "ABC"

//     console.log(college);


// Arrays:

    // let arr1 = [100, 200, 300, 400]
    // let arr2 = [1, 2, 3, 4, 5]

// // Spread Operator

    // arr3 = [...arr1, ...arr2]

    // arr3 = [...arr3, 500]

    // console.log(arr3);

// Normal function

    // function demo(x){             // fun definition
    //     console.log(x);
    // }

    // demo("hello");                       // fun call
    // demo("hi")                       // fun call
    // demo(200)                       // fun call

    // function Mul(x){
    //     return x * 2
    // }

    // result = Mul(60)

    // console.log(result);

// Ananymous function:

    // let num = function(){
    //     console.log("hello, I am Ananymous");
    // }

    // num()

// Arrow Function:

    // let arr = () => console.log("hello, I am Arrow");

    // arr()

// IIFE Function:

    // (() => {
    //     console.log("Hi");
    // })()

// Control Statements:

    // 1. Conditional Statements

        // if

            // let age = 17

            // if(age > 18){
            //     console.log("Eligible for voting");
            // }

        // if else

            // let age = 20;

            // if (age > 18) {
            //     console.log("Eligible for voting");
            // }else{
            //     console.log("Not Eligible");
            // }

        // if else if

            //  let age = 17;

            //  if (age > 18) {
            //    console.log("Eligible for voting");
            //  }else if(age == 18) { 
            //    console.log("Possibilities for voting");
            //  }else {
            //    console.log("Not Eligible");
            //  }

        // switch case

            let day = "Mon"

            switch (day) {
              case "Mon":
                console.log("It's a Monday");
                break;
              case 2:
                console.log("It's a Tuesday");
                break;
              case 3:
                console.log("It's a Wednesday");
                break;
              case 4:
                console.log("It's a Thursday");
                break;
              case 5:
                console.log("It's a Friday");
                break;
              case 6:
                console.log("It's a Saturday");
                break;
              default:
                console.log("Happy Weekend");
                break;
            }

    // 2. Looping Statements