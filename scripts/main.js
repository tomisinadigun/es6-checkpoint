// algorithm 
// write a function 
// introduce rest parameter to get list of numbers as an array 
// declare a variable to store sum of numbers whithin the function
// write a forof loop to get each number, power it by 2 and add it to the total of sum 
function squareSum(...numbers){
    let sum = 0
    for(num of numbers){
        let powered = num**2;
        sum += powered;
        
    }
    console.log(sum)
    
}

squareSum(1, 2, 2);



// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
    // Return a string of the number here!
    num = num.toString();
    return num;
}

numberToString(20)


// Code as fast as you can! You need to double the integer and return it.

// algorithm 
// add the value of i to i by using the addition assignment operator 

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    i += i;
    return i;
}



// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// algorithm

// declare a function with a parameter for the random numbers
// declare an empty array withing the function 
// loop through the random numbers and push each number into the array 

function digitize(n) {
    
    //code here
    // reverseNums = [];
    // for(let i = n.length; i >= 0; i--){
    //     reverseNums.push(n[i]);
    // }
    // console.log(reverseNums)


    return String(n).split("").map(Number).reverse() 
}

digitize(12345)



// Implement a function which convert the given boolean value into its string representation.

const  booleanToString = (b) => {
    //your code here
    return String(b)

}

booleanToString(true)


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if(number % 2 === 0){
      return "Even";
    }else {
      return "Odd";
    }
}

evenOrOdd(6);




// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).



function rentalCarCost(d) {
    // Your solution here
    if(d < 3) {
        console.log(d * 40)
    }else if((d >= 3) || (d < 7)){
      console.log( (40 * d) - 20 );
    }else if(d >= 7)  {
      console.log( (40 * d) - 50 );
    }
}

rentalCarCost(8)
