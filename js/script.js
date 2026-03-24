// // // let myname =  'cj';
// // // myname =  'victoria';
// // // console.log(myname);

// // // const variable = 'hunger';
// // // variable =  'foodie';
// // // console.log (variable)

// // // let firstName = 'vee';
// // // let first_name = 'cee';

// // // le

// // let str =  'Hello World';
// // let number =  76;
// // let bol = true;
// // let n =  null;
// // let array =  ['python', 'web', 'cyber', 'java'];
// // let arr =  Array(1,2,3,4,5,6,7,8,9);


// let num1  =  100
// let num2  =  200
// let num3  =  400

// // let total = num1 + num2;

// // num1 += num3
// // num3 -= num1
// // console.log(num3);


// // console.log(num1 < num2 & num2 == num1);
// // console.log(num1 < num2 || num2 == num1);

// // // string method

// // let string = 'aptech'
// // console.log(string.length());

// // to convert a string to uppercase
// console.log(string.toUpperCase());

// //  to convert to lowercase
// console.log(string.toLowerCase())

// //replace
// console.log(string.replace('Aptech', 'Techterminal'))

// //trim
// console.log(string.trim())

// array method
// let arnames = ['Augustina', 'chizzy', 'precious', 'Nneoma'];

// console.log(arnames[0]);

// //changing values using index
// console.log(arnames[2] =  'alec');

// //adding to an array
// //push

// console.log(arnames.push('chizzy'));

// //pop
// console.log(arnames.pop())

// // unshift
// // add to the front of an array

// console.log(arnames.unshift('precious')) // gonna add precious to the  front

// // shift
// console.log(arnames.shift());

// //reverse
// //to reverse an array from the back to the front

// console.log(arnames.reverse());

// //concat
// let students =  ['favy', 'uche',  'mike', 'lillian']; 
// arnames.concat(students) // to join this array to students.


// // CONDITIONAL STATEMENT

// //IF
// // ELSE IF
// // ELSE
// // SWITCH
// //  TERNARY OPERATOR


// Let check = 60;

// if(check == 60){
//     console.log('yes, you are 60 years old')
// }else if(check == 70){
//     console.log('Yes, youre 70years old')
// }else if(check == 80){
//     console.log('you are 80 years old')
// }

// //switch
// let weather =  'rain';
// switch(weather){
//     case 'rain': 
//         console.log('it is  raining, stay at home');
//         break; // if the case is rain, tell us the console and break it there
//     case 'sunny':
//         console.log('the sun is too much');
//         break;
//     case 'thundering':
//         console.log('You will die if you go outside');
//         break;
//     default: 
//         console.log('none of the above');
//         break;
// }

// // ternary operator
// // short form for IF
// // condition ? true : false;

// let myage = 26;
// let display = myage == 26 ? "yes, its correct" : "Not correct";


// // Function

// function myfunc(){
//     let num1 = 50;
//     let num2 = 100;
//     num1 += num2;
//     return num1;
// }

// console.log(myfunc());
// console.log(myfunc());

// // function with parameter

// function addTwo(num1, nym2){
//     num1 += num2;
//     return num1;
// }
// console.log(addTwo(10,20));
// console.log(addTwo(74,30));

// // math functions

// let math;

// math = Math.floor(5.7) // Round down to the nearest whole number
// math = Math.ceil(5.7) // Round up to the nearest whole number
// math = Math.round(5.7) // Round up or down to the nearest whole number
// math = Math.max(50,60,10,90); //maximum number
// math = Math.min(50,60,10,90); //minimum number
// math = Math.sqrt(64) // square root
// math = Math.pow (20,2) // raised to the power to
// math = Math.abs (20,2) // absolute value


// console.log(math); 



// // LOOP
// // For Loop
// // While Loop
// // For OF


// // FOR LOOP
// // Initialization
// // Condition
// // Increment

// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }

/// WHILE LOOP

let i = 1;

while(i <= 20){
    console.log(1)
    i++;
}

// for of

let arloop = [1,2,3,4,5,6,7,8,9];
for(arrvar of arloop){
    console.log(arrvar);
}
