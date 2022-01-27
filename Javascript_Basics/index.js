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
