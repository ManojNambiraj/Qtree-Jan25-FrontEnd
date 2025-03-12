// Looping Statements:

// 1. For loop

    // for (stmt1; stmt2; stmt4) {
    //     stmt3
    // }

    // stmt1: starting value
    // stmt2: checking the conditions
    // stmt3: Execute
    // stmt4: Increment and Decrement

    // for (let i = 1; i <= 10; i++) {
    //     if(i % 2 != 0){
    //         console.log(i);
    //     }
    // }

// 2. while loop

    // let i = 11;

    // while(i <= 10){
    //     console.log(i);
    //     i++;
    // }

// 3. Do... while loop


    // let i = 11;

    // do {
    //   console.log(i);
    //   i++;
    // } while (i <= 10);


// Array methods:

    // M -- map
    // R -- reduce
    // F -- filter

// M -- map

    // let nums = [20, 21, 40, 50, 60, 71, 88, 92]

    // let result = nums.map((item)=> {
    //    return item * 2
    // })

    // console.log(result);

// F -- filter

    // let result = nums.filter((item) => {
    //    return item % 2 != 0
    // })

    // console.log(result);

// R -- reduce
    
    let nums = [1, 2, 3, 4, 5];

    let result = nums.reduce((prev, curr) => prev + curr)

    console.log(result);
    