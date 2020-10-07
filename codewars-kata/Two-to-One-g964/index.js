// Kata link -> https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  const string = s1 + s2;

  let array = string.split("").sort();

  const arraySorted = [...new Set(array)];

  const sortedString = arraySorted.join("");

  return sortedString;
}

// Test exemple:
// console.log(longest("aretheyhere", "yestheyarehere"));
// output must be: "aehrsty"



//Same thing but more simple
const longestSimple = (s1, s2) => [...new Set(s1+s2)].sort().join('');

// Test exemple:
// console.log(longestSimple("aretheyhere", "yestheyarehere"));
// output must be: "aehrsty"
