function SayHello(firstName, lastName) {
    var message = "Hello ";
    message += firstName + " " + lastName;
    return message;
}
alert(SayHello("Onyekachi", "Stanley"));
// the code above we can refactor and put it in a class
var Hello = /** @class */ (function () {
    function Hello() {
        this.TalkHello = function () {
            return "The firstname is " + this.FirstName + " and lastname is " + this.LastName;
        };
    }
    return Hello;
}());
var hello = new Hello();
hello.FirstName = "Onye";
hello.LastName = "Achigboo";
alert(hello.TalkHello());
var School = /** @class */ (function () {
    function School() {
        this.SchoolNameAndAddress = function () {
            return "The name of the school is " + this.Name + " and address is " + this.Address;
        };
    }
    return School;
}());
var school = new School();
school.Name = "Monsuru Agoro";
school.Address = "18b Shasha Local Aovernment Area";
alert(school.SchoolNameAndAddress());
// Working with DataTypes
var sex = "Onyekachi";
var age = 10;
var employeed = true;
// we can decalare strings to have variables and string interpolation
var message = "I am " + age + " years old"; // we can even add an expression
alert(message);
// declaring array
var lst = [1, 2, 3, 4, 5];
var lst2 = [6, 7, 8, 9, 10]; // there is no difference between the code above ad below
// readonly array. We can change the value of the array either push or remove or change
var rolst = lst;
// tuples is a collection which can take different fata types
var y = [10, 'stan']; // parameter must follow the order it was declared else we hav an error
// enum is a collection of named constant
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
alert(c);
// any data type can take anything
var unknown = 10;
unknown = true;
unknown = "anything";
alert(unknown);
// null and undefined. Amy variable that is not initialised is created as undefined.
var mouse;
alert(mouse);
// we can explicititly set the value as null
var mouse = null;
alert(mouse);
// comparison can be done with undeined as well as null.e.g if (mouse == null) then do something
// void datatype. when a function does not return any values.
// Note the data types above are known as primitive types. 
// casting
var a = "A";
var s = a;
s = a;
alert(s);
// difference between let and var
var n1 = 10;
var n1 = 20;
alert(n1); // these code is valid which wll give us 20
//let n2: number = 5;
//let n2: number = 17;
// you cant redeclare with the same name
// let is a blocked scope variable
// it is always advisable to use the let instead of the var as it gives more clarity
// Working with For Loops
var alphabet = ["A", "B", "C", "D", "E"];
for (var s1 in alphabet) {
    alert(s1); // this will give us the index
    alert(alphabet[s1]); // this will give us the values
}
// for of
for (var _i = 0, alphabet_1 = alphabet; _i < alphabet_1.length; _i++) {
    var s1 = alphabet_1[_i];
    alert(s1); // this will give us the values     
}
//# sourceMappingURL=Demo.js.map