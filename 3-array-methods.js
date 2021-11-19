const list = [
  {
    str: "🤖",
    num: 23,
    arr: [true, false],
  },
  {
    str: "🍆",
    num: 69,
    arr: [false, false],
  },
  {
    str: "⚡️",
    num: 1,
    arr: [true, true],
  },
];

// --------------------------------------------------------------------------------------
// .forEach -> Performs the specified action for each element in an array.
// Return signature is `void`.
// --------------------------------------------------------------------------------------
list.forEach((i) => console.log(i));

// --------------------------------------------------------------------------------------
// .map -> Calls a defined callback function on each element of an array,
// and returns an array that contains the results.
// --------------------------------------------------------------------------------------
list.map((i) => i.str); // => ["🤖", "🍆", "⚡️"]

// --------------------------------------------------------------------------------------
// .flatMap -> Calls a defined callback function on each element of an array. Then,
// flattens the result into a new array. This is identical to a map followed
// by flat with depth 1.
// --------------------------------------------------------------------------------------
list.flatMap((i) => i.arr); // => [true, false, false, false, true, true]

// If done with .map
list.map((i) => i.arr); // => [[true, false], [false, false], [true, true]]

// --------------------------------------------------------------------------------------
// .reduce -> Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided
// as an argument in the next call to the callback function.
// --------------------------------------------------------------------------------------
list.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue.num;
  },
  0 // <- initialValue: number
); // => 93

// --------------------------------------------------------------------------------------
// .filter -> Returns the elements of an array that meet the condition specified
// in a callback function.
// --------------------------------------------------------------------------------------
list.filter((i) => i.num > 1); /* =>
[
  { str: "🤖", num: 23, arr: [true, false] },
  { str: "🍆", num: 69, arr: [false, false] },
]
*/

// --------------------------------------------------------------------------------------
// .find -> Returns the value of the first element in the array where predicate is true,
// and undefined otherwise.
// --------------------------------------------------------------------------------------
list.find((i) => i.str === "⚡️"); /* => 
  { str: "⚡️", num: 1, arr: [true, true] }
*/

list.find((i) => i.str === ""); // => undefined

// --------------------------------------------------------------------------------------
// .every -> Determines whether all the members of an array satisfy the specified test.
// --------------------------------------------------------------------------------------
list.every((i) => i.arr.every((b) => b)); // => false

// --------------------------------------------------------------------------------------
// .some -> Determines whether the specified callback function returns true for any
// element of an array.
// --------------------------------------------------------------------------------------
list.some((i) => i.arr.some((b) => b)); // => true

// --------------------------------------------------------------------------------------
// .sort -> Sorts an array in place. This method mutates the array and returns a
// reference to the same array.
//
// It uses a function to determine the order of the elements. It is expected to return a
// negative value if first argument is less than second argument, zero if they're equal
// and a positive value otherwise. If omitted, the elements are sorted in ascending,
// ASCII character order.
//
// By using the spread operator, we are creating a shallow copy of the original array.
// --------------------------------------------------------------------------------------
[...list].sort((a, b) => a.num - b.num); /* => 
[
  { str: "⚡️", num: 1, arr: [ true, true ] },
  { str: "🤖", num: 23, arr: [ true, false ] },
  { str: "🍆", num: 69, arr: [ false, false ] }
]
*/

[...list].sort((a, b) => b.num - a.num); /* => 
[
  { str: "🍆", num: 69, arr: [ false, false ] },
  { str: "🤖", num: 23, arr: [ true, false ] },
  { str: "⚡️", num: 1, arr: [ true, true ] },
]
*/

console.log(list); /* =>
[
  { str: "🤖", num: 23, arr: [ true, false ] },
  { str: "🍆", num: 69, arr: [ false, false ] },
  { str: "⚡️", num: 1, arr: [ true, true ] }
]
*/

// --------------------------------------------------------------------------------------
// .slice -> Returns a copy of a section of an array. For both start and end, a negative
// index can be used to indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.
// --------------------------------------------------------------------------------------
list.slice(1); /* =>
[
  { str: "🍆", num: 69, arr: [ false, false ] },
  { str: "⚡️", num: 1, arr: [ true, true ] }
]
*/

// --------------------------------------------------------------------------------------
// .reverse -> Reverses the elements in an array in place. This method mutates the array
// and returns a reference to the same array.
// --------------------------------------------------------------------------------------
[...list].reverse();
/* =>
[
  { str: "⚡️", num: 1, arr: [ true, true ] },
  { str: "🤖", num: 23, arr: [ true, false ] },
  { str: "🍆", num: 69, arr: [ false, false ] }
]
 */

// --------------------------------------------------------------------------------------
// .join -> Adds all the elements of an array into a string, separated by the specified
// separator string.
// --------------------------------------------------------------------------------------
list
  .map((i) => i.str) // => ["🤖", "🍆", "⚡️"]
  .join(" -> "); // => "🤖 -> 🍆 -> ⚡️"
