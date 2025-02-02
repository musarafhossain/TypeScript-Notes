//Number Type
var age = 25;
var price = 99.99;
var hex = 0xff;
var binary = 10;
var octal = 484;
console.log("Age: ".concat(age, ", Price: ").concat(price, ", Hex: ").concat(hex));
//String Type
var firstName = "John";
var greeting = "Hello, my name is ".concat(firstName);
console.log(greeting);
//boolean Type
var isCompleted = true;
var isAdmin = false;
console.log("Task Completed: ".concat(isCompleted));
//Special Type
var emptyValue = null;
var notAssigned = undefined;
console.log("Empty: ".concat(emptyValue, ", Undefined: ").concat(notAssigned));
//Array
var numbers = [1, 2, 3, 4, 5];
var fruits = ["Apple", "Banana", "Mango"];
var values = [10, 20, 30];
console.log(numbers[0]); // 1
console.log(fruits[1]); // Banana
console.log(values[2]); // 30
//Tuples
var user = ["Alice", 30];
var person = ["John", 25];
console.log("User: ".concat(user[0], ", Age: ").concat(user[1]));
console.log("Person: ".concat(person[0], ", Age: ").concat(person[1]));
//Enums
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
var taskStatus = Status.InProgress;
console.log(taskStatus); // Output: 1
var Role;
(function (Role) {
    Role[Role["User"] = 1] = "User";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["SuperAdmin"] = 3] = "SuperAdmin";
})(Role || (Role = {}));
console.log(Role.Admin); // 2
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var selectedColor = Color.Green;
console.log(selectedColor); // "GREEN"
//Any 
var value = "Hello";
value = 42;
value = true;
console.log(value); // true
//Unknown Type
var data = "Hello";
if (typeof data === "string") {
    console.log(data.toUpperCase()); // HELLO
}
//Void Type
function logMessage(message) {
    console.log("Log: ".concat(message));
}
logMessage("Hello TypeScript");
//Never Type
function throwError(message) {
    throw new Error(message);
}
//Type Assertions (Casting)
var someValue = "Hello TypeScript";
var strLength = someValue.length;
console.log(strLength); // 15
var someValue2 = "TypeScript";
var strLength2 = someValue2.length;
console.log(strLength2);
