// JavaScript Control Flow Statements Assignment

// Q.1 if, else if, else Statements

// (1). Write a JavaScript program that uses if, else if, and else statements to

//  Determine if a given number is positive, negative, or zero.

let givenNumber = 0;
if (givenNumber > 0) {
    console.log(" Number is positive");
} else if (givenNumber < 0) {
    console.log(" Number is negative");
} else {
    console.log(" Number is zero");
}
// Classify a person's age into categories such as "Child," "Teenager," "Adult," or "Senior."

let age = 19;

if (age <= 12) {
    console.log("person's chile");
} else if (age <= 19) {
    console.log("person's teenager");
} else if (age <= 64) {
    console.log("person's Adult");
} else {
    console.log("person's Senior")

}

// Imagine you are tasked with developing a JavaScript program that assists a movie ticket booking system. Your program needs to determine the ticket price for customers based on their age.

let age1 = 20;

if (age >= 0 && age <= 5) {
    console.log('the ticket is free');
} else if (age >= 6 && age <= 12) {
    console.log('the ticket price is $8')
} else if (age >= 13 && age <= 18) {
    console.log('the ticket price $12')
} else if (age >= 19 && age <= 60) {
    console.log('the ticket price $15')
} else if (age >= 61) {
    console.log(' the ticket is free as a senior citizen discount.')
} else {
    console.log('invalid age')
};
//Q2. switch Case

// Extend the program to utilize a switch case for
// Assigning the day of the week based on a given number (1-7).

let day = 7;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
};
// Identifying the type of fruit based on a provided fruit name.

let fruit = "Mango" && "Watermelon";
switch (fruit) {
    case "Mango" && "Watermelon":
        console.log(" This  fruit name is True");
        break;
    case "blueberry" && "Cherry":
        console.log("This  fruit name is false");
        break;
    case "Kiwi" && 'Banana':
        console.log(" Parthenocarpic fruits");
        break;
    default:
        console.log("This is not fruit name ");
};


// Imagine you're tasked with building a smart home automation system that controls different appliances(tv, Ac, fan, etc..) based on voice commands.
//  Your JavaScript program needs to interpret voice commands and execute actions accordingly using a switch case. Develop a JavaScript program that takes voice commands and performs specific actions based on the command given.

// (a).Use a switch case structure to interpret voice commands and execute actions for different appliances in a smart home.
// (b).Define at least five voice commands and assign corresponding actions for each command:

let command = "lights on";
switch (command) {
    case 'lights on':
        console.log('Turning on lights');
        break;
    case 'lights off':
        console.log('Turning off Lights')
        break;
    case 'Ac on':
        console.log("Turning on the Ac");
        break;
    case 'Ac off':
        console.log('Turning off the Ac');
        break;
    case 'tv on':
        console.log("Turning on the Tv");
        break;
    case 'tv off':
        console.log('Turning off the Tv');
        break;

    case 'fan on':
        console.log('Turning on the fan');
        break;
    case 'fan off':
        console.log('Turning off the fan');
        break;
    default:
        console.log('wrong input')


};

// 3. Nested if else Statements


//(a)Determine eligibility for voting based on age and citizenship.

// Implement the following conditions using nested if else statements:

// If the person is both a citizen and aged 18 or older, return "Eligible to vote." If the person is not a citizen, return "Not a citizen. Cannot vote." If the person is a citizen but below 18 years old, return "Citizen, but not old enough to vote." For any other cases or invalid inputs, return "Invalid input."

let age2 = 19;
let citizenShip = "indian";


if (age >= 18) {
    if (citizenShip == "Indian") {
        console.log("This person is eligible to vote");
    } else {
        console.log("This person is not eligible to vote");
    }
};

// Categorize a person's BMI (Body Mass Index) as "Underweight," "Normal weight," "Overweight," or "Obese."

// BMI	Weight Status
// Below 18.5	Underweight
// 18.5 – 24.9  Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

let weight = 38;
if (weight < 18.5) {
    console.log("Underweight");
} else if (weight >= 18.5 && weight <= 24.9) {
    console.log("Healthy Weight");
} else if (weight >= 25.0 && weight <= 29.9) {
    console.log("Overweight");
} else if (weight >= 30.0) {
    console.log("Obesity");
} else {
    console.log("wrong input");
}

// 4. Ternary Operators

// Implement a section in your program using Ternary operators to
// (a).Check if a given number is even or odd.

let num = 31;


num % 2 == 0 ? (output = "this is even number") : (output = "this is odd number");

console.log(output);


// Determine whether a person is eligible for a discount based on their membership status.
// Implement the following condition using a ternary operator:

// If the person is a member, return "Eligible for a discount."
// If the person is not a member, return "Not eligible for a discount."

let membership = 'yes';
membership == "yes" ? (output = " eligible for a discount") : (output = " not eligible for a discount");
console.log(output);

// 5. while and do while Loops

// Write programs utilizing while and do while loops to
// (A):Display numbers from 1 to 10 in reverse order.

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
};

// do while loop to calculate the sum of numbers from 1 to a given positive integer limit. console the total sum of numbers. For example if limit value is 10 then the output should be Expected 55. like (1 + 2 + 3 + ... + 10 =55)


let addNumber = 10;
let ii = 1;
let addSum = 0;
do {
    addSum += ii;
    ii++;
} while (ii <= addNumber);
console.log(addSum);








// 6. for Loop, break, and continue Statements
// /Create a program using a for loop and demonstrate the use of break and continue to:
// (A):Find prime numbers within a specified range.

// take input from the user
const number1 = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
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
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

//6(b)Display the multiplication table of a given number, skipping multiplication by 3//
const number = parseInt(prompt("Enter a number: "));
let table;
for (let i = 1; i <= 10; i++) {
  table = i * number;
  if (i == 3) {
    continue;
  }