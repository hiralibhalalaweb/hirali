
{
    let i=1;
    while (i<5) {
       document.write("google" + "<br>");
       i++; 
    }
}

{
    let i=10;
    while (i<20) {
        document.write("Hello" + "<br>");
        i++;
    }
}
let i=0;
{
    while(i<=10){
        document.write("hello" + "<br>");
        i++;
    }
}

{
    let i=0;
    do{
        document.write("number:-" + i + "<br>");
        i++;
    }while(i<=10)
}
{

let text = "";
let i=0;
do {
  text += i + "<br>";
  i++;
}
while (i < 10);
}

{
    let i=-10;
    for(i; i<0; i++){
        document.write("abcd" + "<br>")
    }
}

{
    for(let counter = 1; counter<=5; counter++){
        if(counter == 8){
            break;
        }
        document.write(counter);
        document.write("<br>");
    }
}
{
    for(let counter = 11; counter<=20; counter++){
        if(counter == 15){
            continue;
        }
        if (counter == 12){
            continue;
        }
        document.write(counter);
        document.write("<br>");
    }
}

{
    link:for(let counter = 1; counter<10; counter++){
        document.write(counter);
        document.write("<br>");

        for(let counter2 = 1; counter2 < 4; counter2++){
            if(counter == 2){
                break link;
            }
            document.write("hii");
            document.write("<br>");
        }
    }
}

{
let i=0;
while (i < 10) {
    document.write ("The number is ")+ i;
    i++;
  }
}
{
    let i=0;
    while (i < 10) {
     document.write("number:-" + i + "<br>"); 
     i++;
    }
}
{
    let i=10;
    while (i < 5) {
        document.write("name" + "<br>");
        i++;
    }
}

{
    let i = 0, j = 1, k;
    document.write("fibonacci series less than 40<br>");
    while(i<40)
    {
        document.write(i + "<br>");
        k = i+j;
        i = j;
        j = k;
        console.log(k);
    }
}
{
    let i=10;
    {
        while(i>=1){
            document.write(i + "<br>")
            i--;
        }
    }
}
{
    let a = 2;
    let b = 5;
{
    while (b<=10){
        let result = a*b;
        document.write(`${a} * ${b} = ${result}`);
        b++;
    }
}     
    
}
{
    let n = 1;
    let fact = 1;
    let i = 1;
{
    while (i<=n){
        fact = fact * 1;
        i++;
        document.write(fact);
       }
    }       
    
}
{
    let n = 1;
    let fact = 1;
    let i = 1;
    while(i<=n){
        fact = fact*1;
        i++;
    }
    document.write(fact);
}
{
    let n = 1;
    let fact = 1;
    let i = 1;
    do{
        document.write("i" + "<br>");
        i++;
    }while (i<=7){
        document.write("i" + "<br>");
        i++;
    }
}
{
let i = 2;
let number = 3;
{
while( i <= 10){
    number = i*i;
    document.write("2" + "<br>");
    i++;
    }
} 
}
var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  console.log(timeDiff + " milliseconds");
}

let employees = [];
for (var a = 10000; i > 0; i--){
  let thisEmployee = {
    id: i,
    name: "Person" + a
  }
  employees.push(thisEmployee);
}

let id = 1;
let employee1 = null;
start();
for (const e of employees) {
    if (e.id === id) {
        employee1 = e;
        break;
    }
}
end();
console.log("Method1: ", JSON.stringify(employee1));
start();
let employee2 = employees.find(e => e.id === id);
end();
console.log("Method2: ", JSON.stringify(employee2));

{
    let i = 1; i <= 59; i++;{
        if (i % 2 !== 0) {
            document.write(i);
        }
    }
}
{
    let text = "";
    for (let i = 0; i < 5; i++) {
      if (i === 3) break;
      text += i + "<br>";
    }
}
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    document.write("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(`${number} is a prime number`);
    } else {
        document.write(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    document.write("The number is not a prime number.");
}

// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    document.write(i);
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

//  {  
//  let sum = 0, number;

//     while(true) {

// //     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));

//      // break condition
//      if(number < 0) {
//          break;
//      }

//      // add all positive numbers
//      sum += number;
// document.write(`The sum is ${sum}.`);

//      }
   


// // display the sum
// document.write(`The sum is ${sum}.`);

// nested for loops

// first loop

for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        document.write(`i = ${i}, j = ${j}`);
    }
}

{
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }
}

//   ↓ why start at 42? 
 {               
    for (var count = 42; count <= 50; count++) { // I recommend always using {}s
    if (count % 3 === 0) { // This checks if 'number' is a multiple of 3
      document.write(count);
    }
  } // closing for loop }
}

document.write("Print all even number between 10 and 40");
var num = 10;
while(num%2 == 0 && num < 40){
	document.write(num);
	num ++;
}

{
    let i = 5;
    let j = 1;

    while(i <= n){
        document.write(i);
        i++;
    }
}

{
    let numbers = [0,1,2,3,4,5,6,7,8,9,10];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 5 === 0){
            document.write(numbers[i] + 'is div by 5');
        }
    }
}