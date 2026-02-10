let str = "hello";
let reversed = str.split("").reverse().join("");

console.log(reversed);

let number = 7;
let isPrime = true;

if (number <= 1) isPrime = false;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime number" : "Not a prime number");