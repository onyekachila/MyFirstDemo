function SayHello(firstName: string, lastName: string): string {
    var message: string = "Hello ";
    message += firstName + " " + lastName
    return message; 
}

alert(SayHello("Onyekachi", "Stanley")); 

// the code above we can refactor and put it in a class

class Hello {
    FirstName: string;
    LastName: string;

    TalkHello = function (): string {
        return "The firstname is " + this.FirstName + " and lastname is " + this.LastName;
    }
}

var hello: Hello = new Hello();
hello.FirstName = "Onye";
hello.LastName = "Achigboo";
alert(hello.TalkHello()); 

class School {
    Name: string;
    Address: string; 

    SchoolNameAndAddress = function (): string {
        return "The name of the school is " + this.Name + " and address is " + this.Address;
    }
}

var school: School = new School();
school.Name = "Monsuru Agoro";
school.Address = "18b Shasha Local Aovernment Area";
alert(school.SchoolNameAndAddress()); 

// Working with DataTypes

let sex: string = "Onyekachi";
let age: number = 10;
let employeed: boolean = true;
// we can decalare strings to have variables and string interpolation
let message = `I am ${age} years old` // we can even add an expression
alert(message); 

// declaring array
let lst: number[] = [1, 2, 3, 4, 5];
let lst2: Array<number> = [6, 7, 8, 9, 10] // there is no difference between the code above ad below

// readonly array. We can change the value of the array either push or remove or change
let rolst: ReadonlyArray<number> = lst;

// tuples is a collection which can take different fata types

let y: [number, string] = [10, 'stan'];  // parameter must follow the order it was declared else we hav an error

// enum is a collection of named constant

enum Color { Red, Green, Blue }
let c: Color = Color.Green; 
alert(c);

// any data type can take anything
let unknown: any = 10;
unknown = true;
unknown = "anything"
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
let a : any = "A";
let s: number = <number>a
s = a as number
alert(s); 

// difference between let and var
var n1: number = 10;
var n1: number = 20;  
alert(n1) // these code is valid which wll give us 20

//let n2: number = 5;
//let n2: number = 17;

// you cant redeclare with the same name
// let is a blocked scope variable
// it is always advisable to use the let instead of the var as it gives more clarity


// Working with For Loops

let alphabet: string[] = ["A", "B", "C", "D", "E"];
for (let s1 in alphabet) {
    alert(s1); // this will give us the index
    alert(alphabet[s1]); // this will give us the values
}

// for of
for (let s1 of alphabet) {
    alert(s1);  // this will give us the values     
}












