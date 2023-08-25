let arr = [
  { test: ["a", "b", "c", "d"] },
  { test: ["a", "b", "c"] },
  { test: ["a", "b", "d"] },
  { test: ["a", "c", "d"] },
  { test: ["a", "b"] },
  { test: ["a", "c"] },
  { test: ["a", "d"] },
  { test: ["a", "b", "k", "e", "e"] },
];

let result = [];

for (const iterator of arr) {
  for (const element of iterator.test) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
}

console.log(result);
