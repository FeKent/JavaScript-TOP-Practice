// Math 1 //

let varOne = 20;
let varTwo = 10;
let varThree = 5
let varFour = 2

let varOneTwo = varOne + varTwo
let varFourThree = varFour - varThree

let finalResult = varOneTwo * varFourThree

let evenOddResult = finalResult % 2==0

if (evenOddResult == true){
    document.write('The answer is an even number' + '<br><br>')
 
}
else{
    document.write('The answer is a odd number')
    }


//shows results of variable//

// Math 2 //

let result = 1.04211
let result2 = 10

result = result * result2;

let finalResult2 = result.toFixed(2);

document.write(typeof finalResult2);

let finalNumber = Number(finalResult2);

document.write('<br>' + finalNumber +'<br>' +typeof finalNumber +'<br>')


// Math 3 //

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

if (eleWeight <= mouseWeight){
    document.write('<br>' +'The elephant weighs less than the mouse')
    let weightComparison = true
}
else{
    document.write('<br>' +'The elephant weighs more than the mouse')
    let weightComparison = false
}

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

if (ostrichHeight >= duckHeight){
    document.write('<br>' +'The ostrich is taller than the duck')
    let heightComparison = true
}
else{
    document.write('<br>' +'The ostrich is smaller than the duck')
    let heightComparison = false
}

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

if(pwd1 == pwd2){
    document.write('<br>' +'Your passwords match.')
    let pwdMatch = true
}
else{
    document.write('<br>' +'Your passwords do not match.')
    let pwdMatch = false
}


// Odin Assignment - Console Log //

//1 // 
console.log(23+97)
//2//
console.log(1+2+3+4+5+6)
//3//
console.log((4+6+9)/77)

// Variables //

//4//
let a = 10
console.log(a)

console.log(9*a)

let b = 7 * a
console.log(b)

//5//

const max = 57
let actual = max - 13
let percentage = actual/max

console.log(percentage)

