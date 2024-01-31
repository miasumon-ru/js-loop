// the same thing can be done in many ways. the examples are given below

//  condition for even number

// for (let i = 0; i<=10; i++){

    // if(i%2 === 0){
    //     console.log(i);
    // }


    // the same thing can be done in the following ways

//     if(i%2 !== 1){
//         console.log(i);
//     }
// }


//  condition for odd number

// for (let i = 0; i<=10; i++){

    // if(i%2 === 1){
    //     console.log(i);
    // }


    // the same thing can be done in the following ways

//     if(i%2 !== 0){
//         console.log(i);
//     }
// }


// give me the list numbers between 1 to 30 divisible by 5

// for(let i = 0; i <=30; i+=1){
//     if(i%5===0){
//         console.log(i);
//     }
// }


// give me the sum of numbers between 1 to 20 divisible by 3


let sum = 0;

for(let i = 0; i <=20; i+=1){
    if(i%3===0){
        console.log(i);
        sum = sum + i;
    }
}

console.log(sum);

