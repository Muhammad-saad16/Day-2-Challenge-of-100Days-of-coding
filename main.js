"use strict";
// 🚀 Day 2 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//Question 1: Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
let quote = "A person who never made a mistake never tried anything new.";
let auther = "Albert Einstein";
console.log(`${auther} once said, "${quote}"`);
//Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
let famous_Person = "Albert Einstein";
let message = `${famous_Person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after stripping the white spaces.
let name = "\t\nMuhammad Saad\t\n";
console.log(name);
console.log(name.trim());
