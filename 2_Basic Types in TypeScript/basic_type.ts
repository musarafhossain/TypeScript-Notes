//Number Type
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(`Age: ${age}, Price: ${price}, Hex: ${hex}`);

//String Type
let firstName: string = "John";
let greeting: string = `Hello, my name is ${firstName}`;
console.log(greeting);

//boolean Type
let isCompleted: boolean = true;
let isAdmin: boolean = false;
console.log(`Task Completed: ${isCompleted}`);

//Special Type
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(`Empty: ${emptyValue}, Undefined: ${notAssigned}`);

//Array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Mango"];
let values: Array<number> = [10, 20, 30];
console.log(numbers[0]); // 1
console.log(fruits[1]); // Banana
console.log(values[2]); // 30

//Tuples
let user: [string, number] = ["Alice", 30];
let person: [string, number, boolean?] = ["John", 25];
console.log(`User: ${user[0]}, Age: ${user[1]}`);
console.log(`Person: ${person[0]}, Age: ${person[1]}`);

//Enums
enum Status {
    Pending,    // 0
    InProgress, // 1
    Completed,  // 2
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // Output: 1

enum Role {
    User = 1,
    Admin = 2,
    SuperAdmin = 3
}

console.log(Role.Admin); // 2

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // "GREEN"

//Any 
let value: any = "Hello";
value = 42;
value = true;
console.log(value); // true

//Unknown Type
let data: unknown = "Hello";
if (typeof data === "string") {
    console.log(data.toUpperCase()); // HELLO
}

//Void Type
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}
logMessage("Hello TypeScript");

//Never Type
function throwError(message: string): never {
    throw new Error(message);
}

//Type Assertions (Casting)
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
console.log(strLength); // 15

let someValue2: unknown = "TypeScript";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2);
