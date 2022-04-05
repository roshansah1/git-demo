
// var myname = "Roshan";
// var myNumber = 8130712429
// console.log (myname,myNumber);
// console.log (typeof(myNumber));

//console.log(20+20);

//  var x = 5;
//  var y = 5;

// console.log(x == y );

//console.log('is both are same : ${x == y}');

//console.log("Remainder operator : " + 81%8 );
// var myName = "Roshan ";

// console.log(myName + "sah");

// console.log(myName + "yadav");


//console.log(3**3);

 
//console.log(10** -1); // 1/10

// var a = 5;
// var b = 10;

//output b=5; a=10;


// var c = b ; //c=10
// b=a;
// a=c;
// console.log(b);
// console.log(a);

// a = a+b; // a = 15
// b = a-b; // b = 5
// a = a-b; // a = 10

// console.log("the value of b = " + b);
// console.log("the value of a = " + a);


// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);










//control statements & loops




//1. IF Else statement

// var tomorrow = "sunny";
// if(tomorrow == "rain"){
// console.log("take a umbrella");
// }else{
// console.log("no need of umbrella");
// }


// var year = 2024;
// debugger;
// if (year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
// console.log(year + " is a leap year");
//         }else{
//             console.log(year + " is not a leap year ");
//         }

//     }else{
//         console.log(year + " is a leap year");
//     }
// //console.log( year + " is a leap year");
// }else{
//     console.log(year + " is not a leap year ");
// }


// var age = 55; 

// console.log((age >= 18) ? "you are eligible to vote" : "your are not eligible to vote");










//2. switch case statement

//Find the area of circle , rectangle & triangle 

// var area = "r";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case "circle":
// console.log("Area of circle is : " + PI*r**2);
// break;

// case 'triangle':
//     console.log("Area of triangle is : " + (l*b)/2);
//     break;

//     case 'rectangle':
//         console.log("Area of rectangle is : " + (l*b) );
// break;

//         default:
//             console.log("please enter a valid data");
// }








//3. while loop statement

// var num = 0;
// while(num <= 10 ){
//     console.log(num);
//     num++;
// }



//4. Do-while loop statement

// var num = 0;
// do{
//     console.log(num);
//          num++;
//         }while(num <= 10 );




//5. For loop

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

//program for table of 8.

// for(var num = 1; num <= 10; num++){
//          debugger;
//          var table = 8;
//      console.log(table + " * " + num + " = " + table*num);
//      }




//functions in javascript

//1. function definition

// function sum(){
//     var a = 10, b = 20;
//     var add = a+b;
//     console.log(add);
// }

// sum();


//Function parameter

// function sum(a,b){
//     var add = a+b;
//     console.log(a+b);
// }

// sum(20,30); // function argument
// sum(10,90);



//function expression


// function sum(a,b){
//     var add = a+b;
//     console.log(a+b);
// }

// var firstadd = sum(20,30); //function expression
// firstadd;


//return keyword


// function sum(a,b){
//         return add = a+b;
//     }
    
//     var firstadd = sum(20,30); 
//     console.log("the sum of two number is " + firstadd);

//Anonymous Function

// var firstadd = function(a,b){
//             return add = a+b;
//         }
        
//         console.log("the sum of two number is " + firstadd(30,20));




//let vs const vs var

// var works inside the function & let works inside block of the function


//example using var keyword

// function biodata(){
//     var myFirstName = "Roshan ";
//     console.log(myFirstName);

//     if(true){
//        var myLastName = "sah ";
//         console.log(myFirstName + myLastName);
        
//     }
//     console.log(myLastName + myFirstName);
// }




// biodata();



//example using let keyword

// function biodata(){
//     let myFirstName = "Roshan ";
//     console.log(myFirstName);

//     if(true){
//        let myLastName = "sah ";
//         console.log(myFirstName + myLastName);
//         console.log(myLastName + myFirstName);
//     }
    
// }

// biodata();



//example using const keyword

// const myName = "Roshan sah"
//  console.log(myName);

//  myName = "sah Roshan"
//  console.log(myName);


//template literals

//program to print table of 8.

// for(let num = 1; num <= 10; num++){
//     let table = 8;
//     console.log(`${table} * ${num} = ${table*num}`);
// }


//default paremeters

// as we know here we declare the value in b & so the a is now
// empty , for the output whatever value we put will store in a.


// function mult(a,b = 5){
//  return a*b;
// }

// console.log(mult(5));





//Fat Arrow Function

// console.log(sum());

// function sum(){
//     let a = 5; b = 10;
//     let sum = a+b;
//     return `the sun of a & b are ${sum}`;
// }



//how to conver this into fat arrow function



// const sum = () => `the sun of a & b are ${(a=10) + (b=20)}`; 

// console.log(sum());


//Array in JavaScript -> used to store multiple data

//var myFriends = ["Manish", "Mayank", "Niraj"];


// traversal in array

// var myFriends = ["Manish", "Mayank", "Niraj"];

// console.log(myFriends[myFriends.length-1]); //use this to show the last element


//if we want to check the length of elements of an array
//console.log(myFriends.length);

//we use for loop to navigate

// var myFriends = ["Manish", "Mayank", "Niraj"];
// debugger;
// for(var i=0; i<myFriends.length; i++){
// console.log(myFriends[i]);
// }


//After ES6 we have for in loop & for of loop

// var myFriends = ["Manish", "Mayank", "Niraj"];

// for(let elements in myFriends){
// console.log(elements);
// }

// for(let elements of myFriends){
// console.log(elements);
// }



//for each loop
//call a function for each element in the array

// var myFriends = ["Manish", "Mayank", "Niraj"];

// myFriends.forEach(function(element, index, array){
// console.log(element + " index : " + index + " " + array);
// });


//using fat arrow function

// var myFriends = ["Manish", "Mayank", "Niraj"];

// myFriends.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);
// });


//searching & filter in an array

//Array.prototype.indexof()

// var myFriends = ["Manish", "Mayank", "Niraj" , "sah"];

// console.log(myFriends.indexOf("sah", 0));

//Array.prototype.lastIndexof()

// var myFriends = ["Manish", "Mayank", "Niraj" , "sah" , "ram"];

// console.log(myFriends.lastIndexOf("sah", 3));


//Array.prototype.includes()

// var myFriends = ["Manish", "Mayank", "Niraj" , "sah" , "ram"];

// console.log(myFriends.includes("ram"));


//Array.prototype.find()

// const prices = [100,200,300,400,500]

// const findElem = prices.find((value) =>  value > 4000);

// console.log(findElem);

//Array.prototype.findIndex()

// const prices = [100,200,300,400,500]

// console.log(prices.findIndex((value) =>  value > 4000));



//Array.prototype.filter()

// const prices = [100,200,300,400,500]

// //price < 400 

// const newPriceTag = prices.filter((elem, index) => {
// return elem < 400;
// })
// console.log(newPriceTag);



//Array.prototype.sort()

// const months = ['March' , 'Jan' , 'Feb' , 'Dec' , 'Nov'];

// console.log(months.sort());


// const number = [1, 30, 4, 21, 1000, 99];

// console.log(number.sort());



//Array Subsection  4 => perform CRUD

//Array.prototype.push()
//The push() method adds one or more elements to the 
//end of an array & returns the new length of the array

//const animals = ['pigs', 'goats', 'sheep' ];


// animals.push('chicken', 'cow', 'sheep');
// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);


//Array.prototype.inshift()

// const animals = ['pigs', 'goats', 'sheep' ];


// animals.unshift('chicken', 'cow', 'sheep');
// console.log(animals);

//2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,7);
// console.log(myNumbers);


//Array.prototype.pop()
// The pop() method removes the last element from an array & returns
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato' , 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);





//Array.prototype.shift()


// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato' , 'cabbage'];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



//Array.prototype.splice()

//const months = ['Jan', 'march', 'April', 'June', 'July'];

//sol 1:

// const newMonths = months.splice(months.length,0,'Dec');
// console.log(months);

//sol 2

// const months = ['Jan', 'march', 'April', 'June', 'July'];


// const newMonths = months.splice(months.length,0,'Dec');
// console.log(newMonths);

//sol 3

// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }else{
//     console.log('no such data found');
// }





//Array.prototype.map()

//const array1 = [1, 4, 9 ,16, 25];

// num > 9

// let newArr = array1.map((curElem, index, arr) => { 
// return curElem > 9;
//     })

//     console.log(array1);
//     console.log(newArr);


// let newArr = array1.map((curElem, index, arr) =>{
// return `Index no. = ${index} and the value is ${curElem} belong to ${arr}`
// })

// console.log(newArr);

// let newArr = array1.forEach((curElem, index, arr) =>{
//     return `Index no. = ${index} and the value is ${curElem} belong to ${arr}`
//     })
    
//     console.log(newArr);



//find the square root of each element in an array?

// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) => Math.sqrt(curElem) )

// console.log(arrSqr);


//multiply each element by 2 & return only those 
//elements which are greater than 10?

// let arr = [2, 3, 4, 6, 8];

//  let arr2 = arr.map((curElem) =>{
//         return curElem * 2;
//  }).filter((curElem) =>{
//      return curElem > 10;
//  })

//  console.log(arr2);


//shortcut in 1 line using fat arrow function

// let arr = [2, 3, 4, 6, 8];

//  let arr2 = arr.map((curElem) => curElem * 2) 
//  .filter((curElem) => curElem > 10)
//  .reduce((accumulator, curElem) => accumulator + curElem)

//   console.log(arr2);


// Reduce Method

//  let arr = [5, 7, 2];
//  debugger;
//  let sum = arr.reduce((accumulator, curElem, index, arr) => accumulator * curElem)
//  console.log(sum);

//How to fatten an aray
// converting 2d & 3d array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']
// ];

// let flatArr = arr.reduce((accumulator, curElem) => accumulator.concat(curElem))
// console.log(flatArr);





//String

// let myName = 'Roshan sah';

// console.log(myName.length);


//Escape character

// let myName = 'Hello my \"Name"\ is Roshan sah';

// console.log(myName);



// Finding a string in a string



