// Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

// Test data:
// console.log(valid_email("me-info@example.com"));
// console.log(valid_email('me-info.example.com'));
// console.log(valid_email('.abc@example.com'));
// console.log(valid_email('@example.com'));
// console.log(valid_email('me-info@'));
// console.log(valid_email('me-info@example..com'));
// Expected output:
// Valid email address!
// You have entered an invalid email address!
// You have entered an invalid email address!
// You have entered an invalid email address!
// You have entered an invalid email address!
// You have entered an invalid email address!

const valid_email = (str) => {};

console.log(valid_email('me-info@example.com'));
console.log(valid_email('me-info.example.com'));
console.log(valid_email('.abc@example.com'));
console.log(valid_email('@example.com'));
console.log(valid_email('me-info@'));
console.log(valid_email('me-info@example..com'));
