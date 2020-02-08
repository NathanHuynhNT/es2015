
/**
 * 'Transpiling' code to from ES2015 (ES6) to ES5
 */

//ES6
var name = "Abdi";

var myObj = {
    name
};

//ES5
var name = "Abdi";

var myObj = {
    name: name
};


/** 
 * Shims: it is basically a small piece of code that implements the feature which is missing from an older environment
 * Most of these shims are available in Babel
 * Example: in ES2015 it introduces new API's to check strict equality of two values called Object.is(). This is a feature that is not available in all browsers so need to check
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 **/
if (!Object.is) {
    Object.is = function (x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }
    };
}

/**
 * Block scope declarations with 'let': throw a reference error
 */
function showNamesLength(names) {
    if (names.length > 5) {
        let moreThanFive = 'there are more than 5 names';
        alert(moreThanFive);
        //other code......
    } else {
        let lessThanFive = 'there are less than 5 names';
        console.log(moreThanFive); //moreThanFive - causes reference error
        alert(lessThanFive);
        //other
    }

    //both let variables don't exist here either
}

showNamesLength(["Abdi", "Cagarweyne", "John", "Nick", "Kieran"]);// throws reference error on line 66

/**
 * With 'var': see that it doesn't throw a reference error, and instead writes to the console undefined
 */
function showNamesLength(names) {
    if (names.length > 5) {
        var moreThanFive = 'there are more than 5 names';
        alert(moreThanFive);
        //other code......
    } else {
        var lessThanFive = 'there are less than 5 names';
        console.log(moreThanFive); //moreThanFive - returns undefined
        alert(lessThanFive);
        //other
    }

    //both var variables available here
}

showNamesLength(["Abdi", "Cagarweyne", "John", "Nick", "Kieran"]);// console logs undefined


/**
 * Using 'let' and 'var' in for loop
 */
var funcs = [];

for (var i = 0; i < 5; i++) {
    funcs.push(function () { console.log(i); });
}

funcs[0](); //logs 5
funcs[1](); //logs 5
funcs[4](); //logs 5

//////////

var funcs = [];

for (let i = 0; i < 5; i++) {
    funcs.push(function () { console.log(i); });
}

funcs[0](); //this logs 0 to the console.
funcs[2](); //this logs 2 to the console.
funcs[4](); //this logs 4 to the console.
///////////

/**
 * A few gotchas with let that are worth noting
 * - Coming from ES5, we are used to the fact that var declared variables are hoisted to the top and are attached to the entire enclosing function
 * - Accessing a let variable earlier than it's declaration generates a ReferenceError, this is also referred to as a Temporal Dead Zone (TDZ)
 * - non-hoisting variables of let
 * - Cannot redeclare let twice in the same scope or sharing the same identifier
 */

console.log(foo); //logs undefined
console.log(bar); //this is a ReferenceError

var foo = "hello";
let bar = "world";

///////
let foo = "hello";
let foo = "world"; //generates an error: SyntaxError: Identifier 'foo' has already been declared

// OR
var foo = "hello";
let foo = "world"; //generates error: SyntaxError: Identifier 'foo' has already been declared

/**
 * const: const creates constants and this means that value cannot be changed once it has been set, must initialize it on declaration
 * key uses of const is that the value cannot be reassigned after its declaration
 * if you created a const that holds an object, like an array or object, you can change the object can be changed without a problem
 */

const API_KEY; //error: SyntaxError: Missing initializer in const declaration
const API_KEY = '123'; //no error this time

//////////

const name = 'Daniel';
name = 'Brian'; //throws a TypeError: Assignment to constant variable

/////////
const names = ['Liam', 'Daniel'];
names.push('Abdi');//works as expected without throwing error
console.log(names[2]); //prints 'Abdi'

/**
 * Default parameters in functions
 */
function box(height, color, url) {
    var height = height || 50,
        color = color || 'blue'
    url = url || 'google.com';

    console.log('height is:', height, 'color is:', color, 'url is:', url);
}
box(75, 'green', 'fullstackstudent.com')// logs: height is: 75 color is: green url is: fullstackstudent.com
box(); //logs the default values: height is: 50 color is: blue url is: google.com

// --> function could run into problems when a value that is deemed falsy is passed in as the parameter to the function
box(0, 'yellow', 'wikipedia.org'); // this logs: height is: 50 color is: yellow url is: wikipedia.org

//update:
function box(height, color, url) {
    var height = (height !== undefined) ? height : 50,
        color = color || 'blue'
    url = url || 'google.com';

    console.log('height is:', height, 'color is:', color, 'url is:', url);
}

box(0, 'yellow', 'wikipedia.org'); //behaves as expected and logs: height is: 0 color is: yellow url is: wikipedia.org

// ES6
function box(height = 50, color = 'blue', url = 'google.com') {
    console.log('height is:', height, 'color is:', color, 'url is:', url);
}

box(0); //logs: height is: 0 color is: blue url is: google.com
////////////////

//Expressions as default values: can invoke other functions that return values when you declare the function that will use that return value
function setHeight(value) {
    return 10 * value;
}


function box(height = setHeight(10), color = 'blue', url = 'google.com') {
    console.log('height is:', height, 'color is:', color, 'url is:', url);
}

box();//logs: height is: 100 color is: blue url is: google.com

//takes two arguments and sets the second parameters default value to be the first. Note that this will only work for parameters that come after the first one
function multiply(num1, num2 = num1) {
    return num1 * num2;
}

console.lo(multiply(2));//returns 4

///////
function multiply(num1 = num2, num2) {
    return num1 * num2;
}

console.log(multiply(3, 3));     // 9
console.log(multiply(1));        // throws error

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

/**
 * Rest operator: rest operator gathers all of the parameters passed in to the function into an array
 */

//ES5:
function sum() {
    //convert arguments object into an array using the the array slice method
    var numbers = Array.prototype.slice.call(arguments);
    var result = 0;

    //loop over the numbers array and add each index value to result on each iteration
    numbers.forEach(function (number) {
        result += number;
    });
    return result;
}
console.log(sum(1));             // 1
console.log(sum(1, 2, 3, 4, 5)); // 15

//ES6
function sum(...numbers) {
    let result = 0;
    numbers.forEach(function (number) {
        result += number;
    });
    return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15

//There is a key restriction when using rest parameters in your functions, and that it no other named arguments can follow in the function declaration
function sum(...numbers, last) { // causes a syntax error
    var result = 0;
    numbers.forEach(function (number) {
        result += number;
    });
    return result;
}

//if the rest parameter is the last argument to be passed in, then this will work fine and will gather all of the arguments into an array
function sum(first, second, ...numbers) {
    var result = 0;
    numbers.forEach(function (number) {
        result += number;
    });
    return result;
}

sum('first', 'second', 2, 2, 3, 4, 5); //works just fine

/**
 * Spread operator: the spread operator spreads out the contents of an array into individual values
 */
let numbers = [1, 2, 3];

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

sum(...numbers);

/**
 * Arrow functions
 * Arrow functions are always expressions
 */

var foo1 = (a, b) => a * b;

var bar1 = a => a * 5;

var foo2 = (a, b) => {
    let counter = 0;

    for (let i = 0; i < b; i++) {
        counter += a;
    }

    return counter;
};

/**
 * function declaration and function expression
 */

//function declaration
function foo3() {
    console.log('foo');
}

//anonymous function expression
var foo4 = function () {
    console.log('foo');
};

/**
 * Binding of this with arrow functions
 */
var person = {
    firstname: "Abdi",
    lastname: "Cagarweyene",
    getFullName: function () {
        console.log(this.firstname, this.lastname);
    }
}

person.getFullName();//prints Abdi Cagarweyne

// --> will run into problems when you change contexts or closures come into the equation, for example
var person = {
    firstname: "Abdi",
    lastname: "Cagarweyene",
    getFullName: function () {
        var name = function () {
            console.log(this.firstname, this.lastname);
        }

        return name();

    }
}

person.getFullName();//undefined undefined

//to fix: To fix this we have two options, we can use the var self = this hack
var person = {
    firstname: "Abdi",
    lastname: "Cagarweyene",
    getFullName: function () {
        var self = this;
        var name = function () {
            console.log(self.firstname, self.lastname);
        }

        return name();

    }
}

person.getFullName();//Abdi Cagarweyne

// can also fix the problem with this using the bind method that is available on functions
var person = {
    firstname: "Abdi",
    lastname: "Cagarweyene",
    getFullName: function () {
        var name = function () {
            console.log(self.firstname, self.lastname);
        }.bind(this);

        return name();

    }
}

person.getFullName();//Abdi Cagarweyne

//ES2015 enables us to eliminate much of the frustrations with the this keyword in JS by using fat arrow functions
var person = {
    firstname: "Abdi",
    lastname: "Cagarweyene",
    getFullName: function () {
        var name = () => {
            console.log(this.firstname, this.lastname);
        };

        return name();

    }
}

person.getFullName();//Abdi Cagarweyne 


/**
 * Objects, Strings and Object.assign
 */
//ES5:
function createUser(first, last) {
    let fullName = first + " " + last;
    return { first: first, last: last, fullName: fullName }
}

//calling the build user fuction 
let user = createUser("Abdi", "Cagarweyne");
console.log(user.first);//Abdi
console.log(user.last);//Abdi Ahmed
console.log(user.fullName);//Abdi Ahmed

//ES6:
function createUser(first, last) {
    let fullName = first + " " + last;
    return { first, last, fullName }//this is equivalent to: return { first: first, last: last, fullName: fullName }
}

//calling the build user fuction 
let user1 = createUser("Abdi", "Cagarweyne");
console.log(user.first);//Abdi
console.log(user.last);//Abdi Ahmed
console.log(user.fullName);//Abdi Ahmed

//The object initializer shorthand works anywhere a new object is returned
let name = "David";
let age = 45;
let colleagues = ["George", "Michelle"];
let user = { name, age, colleagues };//this is the same as: let user = { name: name, age: age, friends: friends };

console.log(user.name);//Davide
console.log(user.age);//45
console.log(user.colleagues);//["George","Michelle"]

/**
 * Object Destructuring: the variables that you are assigning the values to must match the keys of the object that you are destructuring
 */

//for Array:
let nums = [1, 2, 3];
let a = nums[0], b = nums[1], c = nums[2];
console.log(a, b, c); //prints 1 2 3 to the console 

//ES6
let nums = [1, 2, 3];
let [a, b, c] = nums;
console.log(a, b, c)

//for object:
let obj = {
    x: 7,
    y: 8,
    z: 9
}

let x = obj.x, y = obj.y, z = obj.z;
console.log(x, y, z); //print 7 8 9 to the console

//ES6
let obj = {
    x: 7,
    y: 8,
    z: 9
}

let { x, y, z } = obj;
console.log(x, y, z);//print 7 8 9 to the console

/**
 * Adding functions to an Object
 */
let myObj = {
    prop1: 'Hello',
    prop2: 'world',
    fullName: function (firstname, lastname) {
        let fullName = firstname + ' ' + lastname;
        return fullName;
    }
}

//ES6:
let myObj = {
    prop1: 'Hello',
    prop2: 'world',
    fullName(firstname, lastname) {
        let fullName = firstname + ' ' + lastname;
        return fullName;
    }
}

/**
 * Template strings
 */
let url = `/service/${servid}`;

//ES5 
console.log("string text line 1\n" +
    "string text line 2");
// "string text line 1
// string text line 2"


//ES6 
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

/**
 * Object.assign
 */
function person(name, options = {}) {
    let defaults = {
        age: 'at least 18',
        address: 'Shared accommodation',
        occupation: 'Student'
    }

    let finalOptions = Object.assign({}, defaults, options);

    //or can use below code:
    //let finalOptions; 
    //Object.assign(finalOptions, defaults, options); 

    return `${name} is ${finalOptions.age} and is currently at ${finalOptions.address} 
  and their occupation is ${finalOptions.occupation}`;
}

person('abdi', { age: 30 });

/**
 * Assigning with Array desctructuring
 */
let fruits = ['apple', 'grapes', 'banana'];
let [a, b, c] = fruits;
console.log(a, b, c);//apple grapes banana

/**
 * Destructuring and rest parameters
 */
let fruits = ['apple', 'grapes', 'banana'];
let [first, ...rest] = fruits;

console.log(first, rest);//apple, ['grapes', 'banana']

////////////
function myFruits() {
    let fruits = ['apple', 'grapes', 'banana'];
    return fruits;
}

let [a, b, c] = myFruits();

console.log(a, b, c);//apple, grapes, banana

//////////////
/**
 * FOR IN loop
 */
let fruits = ['apple', 'grapes', 'banana'];

for (let i in fruits) {
    console.log(fruits[i]);
}


/**
 * FOR OF loop
 */
let fruits = ['apple', 'grapes', 'banana'];

for (let fruit of fruits) {
    console.log(fruit);
}

/**
 * Objects and the for...of loop: The for of loop cannot be used to iterate over properties of a plain javascript object. So the following will not work:
 */
let person = {
    name: "Abdi",
    address: "123 JS street Node Avenue",
    occupation: "JS Developer"
}

for (let prop of person) {
    console.log("Property", prop); //TypeError: person[Symbol.iterator] is not a function
}

/**
 * Array.find()
 */
//The find method will return the first object that has activated set to true
let services = [
    { name: 'nails', activated: false },
    { name: 'haircut', activated: true },
    { name: 'feet therapy', activated: true }
]

let activated = services.find(service => {
    return service.activated
});

console.log(activated);//{name: 'haircut', activated: true}

/**
 * The Map data structure
 * The set method takes two arguments, a key and a value
 * The get method that only takes a key as its only argument
 */
let carOne = { make: 'Audi' };
let carTwo = { make: 'Ford' };

let carAge = new Map();

carAge.set(carOne, 3);
carAge.set(CarTwo, 5);

console.log(carAge); //{ '[object Object]': 5 }

console.log(carAge.get(carOne));// 3
console.log(carAge.get(carTwo));//5

/**
 * Iterating Maps with for...of
 */
let cars = new Map();

cars.set("CarOne", "Audi");
cars.set("CarTwo", "Ford");
cars.set("CarThree", "GM");
cars.set("CarFour", "BMW");

for (let [key, value] of cars) {
    console.log(`${key} = ${value}`);
}

/**
 * WeakMaps: The WeakMap is a special type of Map, and the main difference is that you can only use objects as keys. This means that you can't use primitive data types such as strings, numbers and booleans as the keys in a WeakMap
 * WeakMaps are not iterable, you cannot use the for..of loop to iterate over the keys in a WeakMap. You will run into the same error when trying to iterate over objects with a for...of loop.
 * The main use for WeakMaps is that they make efficient use of memory, this means that individual entries can be garbage collected while the WeakMap is still in use. They are called 'Weak' because they hold a weak reference to the object that is used as reference for the keys. As long as an object is no longer referenced after it is used, WeakMaps will not prevent the garbage collector from colecting objects that are being used a keys in a WeakMap. This makes efficient use of memory and frees more of it up that can be used else where.
 */
let personOne = {};
let personTwo = {};

let people = new WeakMap();
people.set(personOne, "Abdi");
people.set(personTwo, "David");

console.log(people.get(personOne));//Abdi
console.log(people.get(personTwo));//David

/**
 * Sets
 * Like Maps and WeakMaps, Sets are a new data structure introduced in ES6, to understand why we need Sets in the first place, let's first go back to JS Arrays and see some of the limitations that lead to Sets being added to ES6.
 * To get the number of items in a set you use the .size property
 */

/**
 * Limitations with Array
 * Arrays in JS are simple and easy to use, however one thing that they don't do is enforce uniqueness in the elments that they hold. This means that you can have duplicate entries in an array in JS
 */
let cars = ['Audi', 'Ford', 'Audi', 'Mercedes', 'VW'];
console.log(cars.length)//5

//
let cars = new Set();
cars.add('Audi');
cars.add('Ford');
cars.add('Mercedes');
cars.add({ driver: 'Abdi' });
cars.add('VW');
cars.add('Audi');

console.log('Total no. cars', cars.size);//5

/**
 * Sets and for...of
 */
let cars = new Set();

cars.add('Audi');
cars.add('Ford');
cars.add('Mercedes');
cars.add({ driver: 'Abdi' });
cars.add('VW');
cars.add('Audi');

for (let car of cars) {
    console.log(car);
}

/**
 * Sets and destructuring
 */
let cars = new Set();

cars.add('Audi');
cars.add('Ford');
cars.add('Mercedes');
cars.add({ driver: 'Abdi' });
cars.add('VW');
cars.add('Audi');

let [a, b, c] = cars;
console.log(a, b, c);//Audi, Ford, Mercedes

/**
 * WeakSets
 * recall these are the memory efficient version for Sets
 * If you try to add a string to a WeakSet you will get an error: Invalid value used in weak set, just like WeakMaps, WeakSets only accept objects and nothing else can be stored. So let's add an object instead
 */
let weakCars = new WeakSet();

weakCars.add({ driver: 'Abdi' });
let passenger = { name: 'Sarah' };
weakCars.add(passenger);

////has
let weakCars = new WeakSet();

weakCars.add({ driver: 'Abdi' });
let passenger = { name: 'Sarah' };
weakCars.add(passenger);

console.log(weakCars.has(passenger))// true 

////delete
let weakCars = new WeakSet();

weakCars.add({ driver: 'Abdi' });
let passenger = { name: 'Sarah' };
weakCars.add(passenger);
weakCars.delete(passenger);
console.log(weakCars.has(passenger))// false 

/**
 * Classes
 * add functions (methods) that we want to attach to the constructor function we add this to its to the functions prototype property
 */
class Car {
    constructor(name, model, description) {
        this.name = name;
        this.model = model;
        this.description = description;
    }

    drive() {
        console.log(`${this.name} which is a ${this.model} model is now driving`);
    }
}

let car = new Car('Ford', 'Galaxy', 'A large family car')
console.log(car.description);
car.drive();


/**
 * Promise concept
 * Promises can be in one of three states:
Pending
Fulfilled or resolved
Rejected
 */
let Promise = {
    then() { },
    catch() { },
    all() { }
    //.....
}

function waitingFor(name) {
    console.log('Waiting for ' + name)

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (name === 'Mike') {
                reject(Error('Mike is always late!'))
            } else {
                resolve(name)
            }
        }, 1000)
    })
}

function waitForFriend(name) {
    return function () {
        return waitingFor(name)
    }
}

var gotImpatient = function (error) {
    console.log(error.message)
    return Promise.resolve("We're leaving")
}

function leave() {
    console.log("Great! We've got everyone, let's go")
}


waitingFor('Abdi').then(waitForFriend('Thomas'))
    .then(leave)

waitingFor('Abdi').then(waitForFriend('Thomas'))
    .then(waitForFriend('Michelle'))
    .then(waitForFriend('Mike'))
    .then(waitForFriend('John'))
    .catch(gotImpatient)
    .then(leave)

//Promise.all()
function waitForAll() {
    return Promise.all([
        waitingFor('Abdi'),
        waitingFor('Rhoda'),
        waitingFor('John')
    ])
}

waitForAll().then(function (friends) {
    console.log('Great! ' + friends[0] + ' is coming')
    console.log('Great! ' + friends[1] + ' is coming')
    console.log('Great! ' + friends[2] + ' is coming')
})

// output 
// "Waiting for Abdi"
// "Waiting for Rhoda"
// "Waiting for John"
// "Great! Abdi is coming"
// "Great! Rhoda is coming"
// "Great! John is coming"

/**
 * Iterators
 */
function createIterator(items) {
    let i = 0;

    return {
        next() {
            let done = (i >= items.length);
            let value = !done ? items[i++] : undefined;//refactored from the if else code block

            return {
                done,
                value
            };

        }
    };
}

var iterator = createIterator([1, 2, 3]);

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

// for all further calls
console.log(iterator.next());           // "{ value: undefined, done: true }"