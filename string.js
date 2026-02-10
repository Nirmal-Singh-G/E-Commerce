let str = "hello";
let reversed = str.split("").reverse().join("");

console.log(reversed);

let word = "madam";
let reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}