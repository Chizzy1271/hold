// LOOP

// for(let i = 0; i < 10; i++){
//     console.log('good afternoon', i);
// }
// console.log('\n');

// // for(let i = 10; i > 0; i--){
// //     console.log('good afternoon', i);
// // }


// let x = 0
// while (x < 10){
//     console.log('good afternoon', x)
//     x++
// }
// let i = 10
// while(i > 0){
//     console.log('good evening', i)
//     i--
// }


//ARRAY

let students = ['obi', 'ada', 'vee', 'tee']

//operations
//getting array  elements

console.log(students);
console.log(students[0]); //getting the first element

console.log(students.length);  //total Element inside the array

//adding elements
students.push('veeeee')
students.unshift('ceeeee')
console.log(students)

//removing
students.pop()
students.shift(
     console.log(students)
)
//replace an alement with another
students[0] = 'gerald'
console.log(students);




//FUNCTIONS

function addNum(){
    let num5 = 10
    let num6 = 2
    let res = num5 + num6
    console.log(res)
}
addNum()

function addNum(num5, num6){
    let res = num5 + num6
    console.log(res)
}
addNum(172, 37)
addNum(72, 57)
addNum(12, 31)

//function with return
function getDetails(){
    let fname =  'cee'
    let lname = 'jay'
    let fullname = fname + lname
    return fullname
}
let name = getDetails()
console.log(name);

// dorm manipulation
