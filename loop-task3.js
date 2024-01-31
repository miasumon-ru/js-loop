

// for-loop-task3.js
// display sum of all the odd numbers from 91 to 129
// let sum = 0;
// for (let n = 91 ; n<=129; n++){
//     if(n%2 !==0 ){
//         console.log(n);
//       sum = sum + n;
//     }
// }

// console.log("the sum is : ", sum);


// display sum of all the even numbers from 51 to 85

// with for loop

// let sum = 0;
// for (let n = 51 ; n<=85; n++){
//     if(n%2 !==1 ){
//         console.log(n);
//       sum = sum + n;
//     }
// }

// console.log("the sum is : ", sum);

// with while loop

let sum = 0;
let n = 51;
while(n<=85){

    n++;

    if(n%2 === 0){
        sum = sum + n;
        console.log("the sum is : ", sum);
    }
    
    
}

