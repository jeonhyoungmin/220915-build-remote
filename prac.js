let a = 1;
let b = 2;

let c = [3,4,5]

function sum(first, second) {
  return first + second;
}

console.log(sum(a, b));
console.log(sum(a, a));
console.log(sum.length);


let d = c.map(value => value + b)
console.log(d)