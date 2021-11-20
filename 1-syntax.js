/**
 * Variables
 */

// Bad - Pollutes `global` Scope
var noNo = "☹️";

// Good - Scoped
let yay = "😍";

// Better - Scoped and Immutable
// ** The value of a `const` can't be changed through reassignment.
// ** However, if a constant is an object or array its properties or items can be updated or removed.
const better = "🤩";

/**
 * Primitive Data Types
 */

const boolean = true;
const number = 740;
const string = "Hello World!";
const _null = null;
const _undefined = undefined;
const bigInt = BigInt(12n);
const symbol = Symbol("Unique");

/**
 * Data Structures
 */

const array = [
  "Let's Go Pikachu",
  "Let's Go Eevee",
  "Sword",
  "Shield",
  "Brilliant Diamond",
  "Shinning Pearl",
];

const obj = {
  name: "Pikachu",
  type: "Electric",
  pokedexNo: 25,
};

// The `Map` object holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map();
map.set("key", "value");

// The Set object lets you store unique values of any type, whether primitive values or object references.
const set = new Set([1, 1, 2, 3]);
// => { 1, 2, 3 }

const date = new Date();

const regex = /\d+/;

/**
 *  Truthy Types
 */

const truthy = [
  true,
  {},
  [],
  42,
  "0",
  "false",
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
];

/**
 *  Falsy Types
 */

const falsy = [false, null, undefined, 0, -0, 0n, NaN, ""];

/**
 * Control Flow
 */

if (boolean) {
  console.log("True");
} else {
  console.log("False");
}

switch (string) {
  case "Hello World!":
    console.log("Hi!");
    break;
  default:
    console.log("Default");
}

/**
 * Expressions (Boolean and Arithmetic)
 */

const booleanExp = number < 800 && (string.startsWith("M") || boolean);
// => true

const ternaryExp = obj.pokedexNo < 151 ? "Kanto Pokedex" : "National Pokedex";
// => Kanto Pokedex

const add = 1 + 1;
const substract = 2 - 1;
const multiply = 3 * 3;
const divide = 4 / 2;
const power = 2 ^ 2;
const modulo = 4 % 2;

/**
 * Loops
 */

for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i]);
}

// The for...of statement creates a loop iterating over iterable objects, including:
// built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set,
// and user-defined iterables. It invokes a custom iteration hook with statements
// to be executed for the value of each distinct property of the object.
for (const game of array) {
  console.log(game);
}

// The for...in statement iterates over all enumerable properties of an object that are keyed
// by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
for (const prop in obj) {
  console.log(`${prop} => ${obj[prop]}`);
}

let counter = 0;

while (counter < 5) {
  counter += 1;
  console.log({ counter });
}

do {
  console.log("👾");
} while (false);

/**
 * Functions and Methods
 */

function goodOldFn(x, y, ...args) {
  console.log(args);
  return x + y + args.reduce((a, _) => a + _, 10);
}

const anonymousFn = function (x, y, ...args) {
  console.log(args);
  return x + y;
};

const arrowFn = (x, y) => x + y;

const objWithMethod = {
  value: "this is a value",
  method: function (x, y, ...args) {
    const anotherFn = () => console.log(this.value);
    anotherFn();
    console.log(args);
    return x + y;
  },
};

/**
 *  Template Strings
 */

const teplateStr = `No. ${obj.pokedexNo} ${obj.name}`;
// => No. 25 Pikachu

/**
 *  Deconstruct Objects and Arrays
 */

const { name } = obj;
// name => Pikachu

const [a, b, ...rest] = array;
// a    => "Let's Go Pikachu",
// b    => "Let's Go Eevee",
// rest => ["Sword", "Shield", "Brilliant Diamond", "Shinning Pearl",]

/**
 *  Spread Operator
 */

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4];
console.log(sum(...numbers));

// Shallow Copies

const copyNumbers = [...numbers, 5];
// => [1, 2, 3, 4, 5]

const copyObj = {
  ...obj,
  region: "Kanto",
};
// => {
//   name: "Pikachu",
//   type: "Electric",
//   pokedexNo: 25,
//   region: "Kanto",
// }

const org1 = {
  anotherObj: {
    str: "A string",
  },
};

const shallowCopy = {
  ...org1,
};
shallowCopy.anotherObj.str = "Test";
console.log({ org1, shallowCopy });

// Deep Copies

const org2 = {
  anotherObj: {
    str: "A string",
  },
};

const deepCopy = structuredClone(org2);
deepCopy.anotherObj.str = "Test";
console.log({ org2, deepCopy });
