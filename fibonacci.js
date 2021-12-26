// take a input from a user
var number = prompt("Enter a number");
number = parseInt(number);
var a = 0;
console.log(a);
var b = 1;
console.log(b);
for (var i = 0; i <= number; i = i + 1) {
  var fib = a + b;
  //  1 + 1 = 2
  console.log(fib);
  a = b;
  // 1 = 1
  b = fib;
  // 1 = 2
}