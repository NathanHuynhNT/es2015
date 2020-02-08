/**
 * the loose equality (==) double equals comparison operator
 * the strict equality (===) triple equals comparison operator
 */

/**
 * The falsy values in JavaScript are:  0, 0n, null, undefined, false, NaN, and the empty string “”
 * the number 0
 * the BigInt 0n
 * the keyword null
 * the keyword undefined
 * the boolean false
 * the number NaN
 * the empty string “” (equivalent to `` or ‘’)
 * - “A falsy value is a value that is considered false when encountered in a Boolean context.” — Mozilla Developer Network
 * - Truthy values include the empty object {} and the empty array [] — since they aren’t falsy, they are truthy, by definition
 * Despite all being falsy, they are not all equal with the double equals ==:
 * - The values null and undefined are loosely equal to each other.
 * - NaN is not equal to any other value, not even itself.
 * - The other falsy values (0, 0n, false, and “”) are all loosely equal.
 * Code example of falsy values: Here is a complete list of falsy comparisons using the loose equality (==) double equals comparison operator:
 */

console.log("The 7 falsy values");
0 ? console.log("truthy") : console.log("falsy"); // falsy
0n ? console.log("truthy") : console.log("falsy"); // falsy
null ? console.log("truthy") : console.log("falsy"); // falsy
undefined ? console.log("truthy") : console.log("falsy"); // falsy
false ? console.log("truthy") : console.log("falsy"); // falsy
NaN ? console.log("truthy") : console.log("falsy"); // falsy
"" ? console.log("truthy") : console.log("falsy"); // falsy

console.log("Some examples of truthy values")
37 ? console.log("truthy") : console.log("falsy"); // truthy
37n ? console.log("truthy") : console.log("falsy"); // truthy
true ? console.log("truthy") : console.log("falsy"); // truthy
"😂" ? console.log("truthy") : console.log("falsy"); // truthy
let empty = [];
empty ? console.log("truthy") : console.log("falsy"); // truthy
empty = {};
empty ? console.log("truthy") : console.log("falsy"); // truthy

// Comparisons of falsy values with ==
console.log("The number 0");
console.log(0 == 0); // true
console.log(0 == 0n); // true
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(0 == false); // true
console.log(0 == NaN); // false
console.log(0 == ""); // true

console.log("The BigInt 0n")
console.log(0n == 0n) // true
console.log(0n == null) // false
console.log(0n == undefined) // false
console.log(0n == false) // true
console.log(0n == NaN) // false
console.log(0n == "") // true

console.log("The value null")
console.log(null == null) // true
console.log(null == undefined) // true
console.log(null == false) // false
console.log(null == NaN) // false
console.log(null == "") // false

console.log("The value undefined")
console.log(undefined == undefined) // true
console.log(undefined == false) // false
console.log(undefined == NaN) // false
console.log(undefined == "") // false

console.log("The boolean false")
console.log(false == false) // true
console.log(false == NaN) // false
console.log(false == "") // true

console.log("The number NaN")
console.log(NaN == NaN) // false
console.log(NaN == "") // false

console.log(`The empty string ""`)
console.log("" == "") // true

/*
 * Code example of falsy values: Here is a complete list of falsy comparisons using the loose equality(==) double equals comparison operator:
 */
// Comparisons of falsy values with ===
console.log("The number 0")
console.log(0 === 0) // true
console.log(0 === 0n) // false
console.log(0 === null) // false
console.log(0 === undefined) // false
console.log(0 === false) // false
console.log(0 === NaN) // false
console.log(0 === "") // false

console.log("The BigInt 0n")
console.log(0n === 0n) // true
console.log(0n === null) // false
console.log(0n === undefined) // false
console.log(0n === false) // false
console.log(0n === NaN) // false
console.log(0n === "") // false

console.log("The value null")
console.log(null === null) // true
console.log(null === undefined) // false
console.log(null === false) // false
console.log(null === NaN) // false
console.log(null === "") // false

console.log("The value undefined")
console.log(undefined === undefined) // true
console.log(undefined === false) // false
console.log(undefined === NaN) // false
console.log(undefined === "") // false

console.log("The boolean false")
console.log(false === false) // true
console.log(false === NaN) // false
console.log(false === "") // false

console.log("The number NaN")
console.log(NaN === NaN) // false
console.log(NaN === "") // false

console.log(`The empty string ""`)
console.log("" === "") // true