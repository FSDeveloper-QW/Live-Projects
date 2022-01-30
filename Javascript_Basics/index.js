// This is how to make a comment in Javascript : Log a Statement (String) on the Console!
// console.log("Hello World");

// TODO: LESSON 1 - VARIABLES
// "Let" is use to identify a "variable" and "FirstName" is the name of the variable
// and "= 'Quintus'" is called the String

// FIXME: RULE 1 (FOR VARIABLES) - Cannot be a reserve keyword (e.g. let, if etc.)
// FIXME: RULE 2 (FOR VARIABLES) - They should be meaningful
// FIXME: RULE 3 (FOR VARIABLES) - They cannot start with a number (e.g. 1name)
// FIXME: RULE 4 (FOR VARIABLES) - They cannot contain a space of hyphen (-)
// FIXME: RULE 5 (FOR VARIABLES) - They are case-sensitive

// What is Camel Notion:  First Letter of 1st Word must be LOWERCASE and First Letter of each Following Word should be in UPPERCASE (e.g firstName)

// let firstName = "Quintus";
// console.log(firstName);

// let lastName = "Williamson";
// console.log(lastName);

// let firstName2 = "Karla",
//   lastName2 = "Du Plessis";
// console.log(firstName2, lastName2);

// TODO: LESSON 2 - CONSTANTS

// Use "const" for setting constants

// const interestRate = "0.3";
// console.log(interestRate);

// TODO: LESSON 3 - PRIMITIVE / VALUE TYPES (OF VARIABLES)
// FIXME: Value / Primitive Types include: String, Number, Boolean, Undefined, null and symbol

// let name = "Johannes"; // called a String Literal
// let age = 30; // called a Number Literal
// Boolean's can only be "TRUE" or "FALSE"
// let isApproved = true; // called a Boolean Literal
// let middleName; // called undefined literal (Option 1)
// let middleName2 = undefined; // called an undefined literal (Option 2)
// let selectedColor = null; // called a null literal
// "null" is used when you want to explicitly clear the value of a variable

// TODO: LESSON 4 - DYNAMIC TYPING

// use the "typeof" command in CONSOLE to determine the Type of Variable (e.g typeof age, will return "number")

// TODO: LESSON 5 - OBJECTS
// FIXME: Reference Types include: Objects, Arrays, Functions

// Two random variables
// let name = "Pieter";
// let age = 30;

// Linking two "VARIABLES" to an "OBJECT"

// let person = {
//   // Define the properties of this object / person
//   name: "Pieter",
//   age: 30,
// }; // {} is called an object literal

// console.log(person);

// FIXME: There are 2 Ways to work with the Properties of an Object

// FIXME: Option 1 - Dot Notation (DEFAULT USE)
// person.name = "Francois";

// console.log(person.name);

// FIXME: Option 2 - Bracket Notation (WHEN A SELECTION NEEDS TO BE MADE)

// person["name"] = "Daleen";

// Or written differently

// let selection = "name";
// person[selection] = "Daleen";

// console.log(person.name);

// TODO: LESSON 6 : ARRAYS   (Used to list items in an Object / e.g list products in shopping cart)

// let selectedColors = ["red", "blue", "green"]; //  [] is called and ARRAY Literal

// console.log(selectedColors);

// FIXME: On the Console you will note that each color has an index number e.g 0 = red, 1=blue, 2=green
// How to Log a specific INDEX Number

// console.log(selectedColors[2]);

// FIXME: Different way to write it

// let selectedColors = ["red", "blue"];
// selectedColors[2] = "green";
// console.log(selectedColors);

// FIXME: If you want to now the "length" of the Array / Number of Products

// console.log(selectedColors.length);

// FIXME: IMPORTANT NOTE:  An Array is a Data Structure that we use to represent a list of items

// TODO: LESSON 7 :  FUNCTIONS

// FIXME: Function Type 1 - Basic Example - Performing a task (displaying something on the console)

// function greet() {
//   console.log("Hello World");
// } //  the " () " is part of the Syntax of a function

// greet();

// FIXME: Function Type 1 - More advance Example - Performing a task (displaying something on the console)
// "name" is a PARAMETER of the greet function / while "Quintus" is an argument to the greet function

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Quintus");

// FIXME: Function Type 1 - Even more advance example - Performing a task (displaying something on the console)

// function greet(name, lastName, age) {
//   console.log("Hello " + name + " " + lastName + " " + age);
// }

// greet("Quintus", "Williamson", 49);

// FIXME: Function Type 2 - Calculation a Value

// function square(number) {
//   return number * number;
// }

// let number = square(5);
// console.log(number);

// FIXME: Shorter version of same code

// console.log(square(5));

//TODO: Chapter 3 Lessons

// TODO: Operators - Types: Arithmetic,  Assignment, Comparison, Logical, Bitwise
// Operators are used with variables and constants to express logic and implement algorithms

// FIXME: Type 1 - Arithmetix Operators

// let x = 10; // Variable 1
// let y = 3; // Variable 2

// FIXME:  The Easy Straighforward Operators

// console.log(x + y); // Addition Operator & "x + y" is referred as an expression in JS
// console.log(x - y); // Substraction Operator
// console.log(x * y); // Multiplication Operator
// console.log(x / y); // Division Operator
// console.log(x % y); // Remainder of division
// console.log(x ** y); // "To the Power of" / Exponention Operator

// FIXME: Increment Operator - indicated as (++)
// console.log(x); // Only displays 10 on the console
// console.log(++x); // Displays 11 as it increment with 1 from 10
// console.log(x++); // Display 10 first and then increment with next log
// console.log(x);

// FIXME: Decrement Operator - Indicated as (--)

// console.log(y);
// console.log(--y);
// console.log(y--);
// console.log(y);

// FIXME: Type 2 - Assignment Operators / Assign a new value to x
// '=' and '+=', '-+', '*=' etc are Assignement operators

// Variable 1
// let x = 10;

// Normal Way to Write code
// console.log((x = x + 5));   // Answer = 15

// Better Way to write code
// console.log((x += 5)); // Answer =15
// console.log((x -= 5)); // Answer =5
// console.log((x *= 5)); // Answer =50
// console.log((x /= 5)); // Answer =2

// FIXME: Type 3 - Comparison Operators (Returns Boolean Values - True or False)

// let x = 1;

// Relational Operaters (< / > / >= / <=)

// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// Equality Operators ( === )

// console.log(x === 1); // To check if x is equal to 1
// console.log(x !== 1); // To check is x is not equal to 1

// FIXME: Type 4 - Equality Operators

// Strict Equality Operators FIXME: Values on each of the === have the same "TYPE" and "VALUE"
// FIXME: BEST PRACTICE IS TO USE THE STRICT EQUALITY OPERATOR

// console.log(1 === 1); //  Will Return TRUE
// console.log("1" === 1); //  Will Return FALSE as '1' is a string and not Number

// Lose Equality Operator FIXME:  Does compare "TYPE" it only check the First Value and convert 2nd value to same

// console.log(1 == 1); // Will Return TRUE
// console.log("1" == 1); // Will also Return TRUE ... its change the right 1 to '1'

// FIXME: Type 5 - Ternary / Conditional Operators

// TODO: HOW TO IMPLEMENT THE FOLLOWING RULE in JAVASCRIPT
// If a customer has more than 100 points,
// they are a 'gold' customer, othewrwise they
// are a 'silver' customer.

// let points = 90;

// READS:  if points is greater than 100 then gold otherwise (:) it is silver
// the conditions that is set is if "points > 100"
// READS LIKE AN IF STATEMENT

// let type = points > 100 ? "gold" : "silver";

// console.log(type);

// FIXME: Type 6 - Logical Operators (Use to make decisions on Multiple Conditions)

// 3 Types of Logical Operators:  and / or / not

// TODO: Logical Operator AND (Display as '&&' two ampersands)
// RULE OF THUMB:  Returns TRUE if both operands are TRUE

// console.log(true && true); // Will Return TRUE
// console.log(false && true); // Will Return FALSE

// FIXME: Real World Example - Approving a client Loan
// Build an APP to evaluate if client have HIGH INCOME and
// good CREDIT SCORE, before loan gets approved

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan); // Returns TRUE

// TODO: Logical Operator OR (Display as '||' two straight lines)
// RULE OF THUMB:  Returns TRUE if one of the operands are TRUE

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan);  // Returns TRUE

// TODO: Logical Operator NOT (Display as '!' exclamation mark)

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("Eligible", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused", applicationRefused);

// FIXME: Type 7 - Logical Operators with Non-Boolean

// TODO: Falsy Values (false)
// Types: undefines / null / 0 / false / '' (an empty string) / NaN (not a number)

// TODO: Anything that is not Falsy => is Truthy

// Short-circuiting explained

// console.log(false || 1 || 2); // Will Return 1 - Because 1 is the first TRUE Statement
// Short-circuiting means it ignores all elements after the the first True element was found
// so 1 was True and everything further to the right is ignored

// TODO: Real World Example
// App where user have to pick a colour or use default color (T-Shirt Business)

// let userColour = "red";
// let defaultColor = "blue";
// let currentColor = userColour || defaultColor;

// console.log(currentColor); // Answer is red as user have selected a colour

// let userColour = undefined;
// let defaultColor = "blue";
// let currentColor = userColour || defaultColor;

// console.log(currentColor); // Answer is Blue as user have not selected a colour

// FIXME: Type 8 - Bitwise Operators
// Not very often used / More used in Computer Science
// Refers to the decimal annd binary system differences

// humans use the decimal system to store numbers, i.e 1, 2, 3, 4, 5 etc.
// Computers use the binary system to store numbers and uses combinations of 1 and 0

// TODO: Examples: Decimal System vs Binary System

// 1 => 00000001  (Seven Zero's and 1 / 8 Digits / Each Digit is called a Bit / 8 Bits)
// 2 => 00000010  (Siz Zero's, 1 and Zero)
// R => 00000011  (Calculate each Vertical Line of 1 and 2 to get R)
// R = Binary Number for the decimal number 00000011, which is 3

// console.log(1 | 2); // Bitwise Operator OR (use only one '|' - Single Vertical Line)
// console.log(1 & 2); // Bitwise Operator AND (use only one '&' - Single Ampersand)

// TODO: REAL WORLD EXAMPLE (OF BITWISE OPERATORS)
// ACCESS CONTROL SYSTEM
// So users can have these permissions:  Read, Write, Execute
// For a READ only permission use Binary Number: 00000100
// For a READ AND WRITE permission use Binary Number: 00000110
// For a READ, WRITE and EXECUTE permission use Binary Number: 00000111
// Covert Binary Numbers to Decimal Numbers
// READ ONLY => 00000100 = 4 (Decimal)
// WRITE ONLY => 00000010 = 2 (Decimal)
// EXECUTE ONLY => 00000001 = 1 (Decimal)
// READ AND WRITE => 00000110 = 6 (Decimal)
// READ, WRITE and EXECUTE => 00000111 = 7 (Decimal)

// FIXME: Implementation

// Define the Constants
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// Define Your Perminssion
// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;

// Set Permission Confirmation Message
// let messageone =
//   myPermission & readPermission
//     ? "User have READ permission = YES"
//     : "User have READ persmission = NO";

// let messagetwo =
//   myPermission & writePermission
//     ? "User have WRITE permission = YES"
//     : "User have WRITE permission = NO";

// Display Your Permissions on Console

// console.log(myPermission);
// console.log(messageone);
// console.log(messagetwo);

// FIXME: NEW SECTION - Operators Precedence

// TODO: EXAMPLE 1

// let x = 2 + 3 * 4;

// console.log(x);
// Answer is 14 , Because Multiplication have precedence over adding
// So, 3 * 4 is calculated first and then 2 is added

// TODO: EXAMPLE 2

// let x = (2 + 3) * 4;

// console.log(x);
// Answer is 20 , Because 2 + 3 needs to be executed together () and first
// and then multiplied by 4

// FIXME:  LAST SECTION - CODING EXAMPLE (SWAPPING VARIABLES)

// let a = "red";
// let b = "blue";

// Code to Swop the variables - Need to have a 3rd Variable to store
// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// -------------------------------
// TODO: CHAPTER 4 - CONTROL FLOW
// -------------------------------

// 2 Conditional Statement in JS:
// IF ... ELSE
// SWITCH ... CASE

// FIXME: Example (ELSE ... IF) :  Greet Someone depending on the Hour

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

// TODO: The Structure to follow is like this below:

// if (condition) {
//   statement;
// } else if (anotherCondition) {
//   statement;
// } else if (yetAnotherCondition) {
//   statement;
// }

// If non of the above condition return TRUE then use ELSE
// else statement;

// TODO: Answer (IF ... ELSE)

// let hour = 15;

// if (hour >= 6 && hour < 12) console.log("Good Morning!");
// else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
// else console.log("Good Evening!");

// FIXME: Example (SWITCH ... CASE) :
// See if User is a GUEST, MODERATOR or ADMIN

// let role = "ADMIN"; // Set the variable

// Syntax: switch (viariable);

// switch (role) {
//   case "GUEST":
//     console.log("GUEST USER");
//     break;
//   case "MODERATOR":
//     console.log("MODERATOR USER");
//     break;
//   case "ADMIN":
//     console: log("ADMIN USER");
//     break;
//   default:
//     console.log("UNKNOWN ROLE");
// }

// FIXME:  Implement same example with IF ... Else
// Using the Strict Equality Operator (===)

// if (role === "GUEST") {
//   console.log("GUEST USER");
// } else if (role === "MODERATOR") {
//   console.log("MODERATOR USER");
// } else if (role === "ADMIN") {
//   console.log("ADMIN USER");
// } else console.log("UNKWOWN USER");

// TODO:  IF and ELSE is more often used than SWITCH and CASE

// FIXME:  FOR Statement
// EXAMPLE: Say you want to display "Hello World" 5 times on the Console

// TODO: Typical Answer

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// TODO: Best Practice Answer make use of LOOPS
// 5 Types of LOOPS:
// For / While / Do ... While / For ... in / For ... of

// FIXME: Syntax (Utilise 3 Statements)
// for (initialExpression; Condition; incrementExpression)
//    statement (i.e. console.log())
// initialExpression => set a variable
// condition => how many times must this loop run
//incrementExpression => use the Increment Operator (++)

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World");
// }

// 'i' is refer to as the 'index' in a FOR Loop
// setting the "Loop Variable"

// FIXME:  WHILE STATEMENT
// In a FOR Statement the Loop Variable is part of the LOOP
// In a WHILE Statement the Loop Variable needs to be defined externally

// TODO: FOR statement
// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// TODO: WHILE statement

// SYNTAX :  while (condition) {Statment; increment}

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//FIXME: DO ... WHILE Statements
// Getting the Same Results as Above with a DO ... WHILE Loop
// Slightly different than a WHILE Loop

// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// DO ... WHILE Statements is not used that much in coding

// FIXME: INFINITE LOOPS
// Be extremely Careful when accidentally implementing Infinte Loops

// TODO: Example 1 of an infinte loop that can crash your PC
// Using the WHILE Statement

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++; // if you forget to include this line, it will cause an infinite loop
}

// TODO: Example 2 of an infinte loop that can crash your PC
// Using the WHILE Statement

// while (true) {}

// TODO: Example 3 of an infinte loop that can crash your PC
// Using the DO ... WHILE Statement

// do {} while (true);

// TODO: Example 4 of an infinte loop that can crash your PC
// Using the FOR Statement

// for (let i = 0; i > 0; i++)

// FIXME: RULE OF THUMB - Avoid Infinite Loops

