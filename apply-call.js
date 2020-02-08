/**
 * https://www.w3schools.com/js/js_function_apply.asp
 * 
    The Difference Between call() and apply(). The difference is:

    - The call() method takes arguments separately.
    - The apply() method takes arguments as an array.
 */

var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};
var person1 = {
    firstName: "John",
    lastName: "Doe"
};
person.fullName.apply(person1, ["Oslo", "Norway"]);

//////////////

var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};
var person1 = {
    firstName: "John",
    lastName: "Doe"
};
person.fullName.call(person1, "Oslo", "Norway");