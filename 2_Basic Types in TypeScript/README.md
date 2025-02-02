# **Chapter 2: Basic Types in TypeScript**

## **2.1 Introduction to TypeScript Types**
TypeScript is a **statically typed language**, meaning variables have fixed types. This helps catch errors early and improves code maintainability.

### **2.1.1 Why Use Types?**
- Prevents runtime errors by catching issues at compile time.
- Provides better IDE support (autocompletion, type hints).
- Makes code more readable and maintainable.

---

## **2.2 Primitive Types**
TypeScript has several built-in types similar to JavaScript:

### **2.2.1 Number Type (`number`)**
Used for integers and floating-point numbers.
```ts
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(`Age: ${age}, Price: ${price}, Hex: ${hex}`);
```

### **2.2.2 String Type (`string`)**
Used for text values.
```ts
let firstName: string = "John";
let greeting: string = `Hello, my name is ${firstName}`;
console.log(greeting);
```

### **2.2.3 Boolean Type (`boolean`)**
Represents `true` or `false`.
```ts
let isCompleted: boolean = true;
let isAdmin: boolean = false;
console.log(`Task Completed: ${isCompleted}`);
```

### **2.2.4 Special Types (`null` and `undefined`)**
- `null`: Represents an empty or unknown value.
- `undefined`: Represents a variable that has been declared but not assigned a value.

```ts
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(`Empty: ${emptyValue}, Undefined: ${notAssigned}`);
```

---

## **2.3 Complex Types**
### **2.3.1 Arrays (`Array<T> or T[]`)**
TypeScript allows defining arrays of a specific type.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log(numbers[0]); // 1
console.log(fruits[1]); // Banana
```

You can also use the generic syntax:
```ts
let values: Array<number> = [10, 20, 30];
```

---

### **2.3.2 Tuples (`[T1, T2, ...]`)**
A tuple is an **array with a fixed length and specific types** for each position.
```ts
let user: [string, number] = ["Alice", 30];
console.log(`User: ${user[0]}, Age: ${user[1]}`);
```

Tuples support optional elements:
```ts
let person: [string, number, boolean?] = ["John", 25];
```

---

### **2.3.3 Enums (`enum`)**
Enums allow defining named constants.

#### **Numeric Enum**
```ts
enum Status {
  Pending,    // 0
  InProgress, // 1
  Completed,  // 2
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // Output: 1
```

#### **Custom Numbering**
```ts
enum Role {
  User = 1,
  Admin = 2,
  SuperAdmin = 3
}

console.log(Role.Admin); // 2
```

#### **String Enum**
```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // "GREEN"
```

---

### **2.3.4 Any Type (`any`)**
- Allows any type, disabling type checking.
- Useful when migrating JavaScript to TypeScript.

```ts
let value: any = "Hello";
value = 42;
value = true;
console.log(value); // true
```

---

### **2.3.5 Unknown Type (`unknown`)**
- Safer alternative to `any`, requiring explicit type checking before usage.

```ts
let data: unknown = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase()); // HELLO
}
```

---

### **2.3.6 Void Type (`void`)**
- Used for functions that **don’t return a value**.

```ts
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}
logMessage("Hello TypeScript");
```

---

### **2.3.7 Never Type (`never`)**
- Represents a function that never **returns** (e.g., throws an error or runs an infinite loop).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## **2.4 Type Assertions (Casting)**
You can **manually specify a type** using `as` or `<Type>` syntax.

```ts
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
console.log(strLength); // 15
```

```ts
let someValue2: unknown = "TypeScript";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2);
```

---

## **2.5 Hands-on Project: Student Management System**
### **📌 Goal:** Create a simple system to store student names and marks.

1. **Create a file `students.ts`**
```ts
enum Grade {
  A = "Excellent",
  B = "Good",
  C = "Average",
  D = "Poor",
  F = "Fail"
}

type Student = {
  name: string;
  marks: number;
  grade: Grade;
};

let students: Student[] = [
  { name: "Alice", marks: 90, grade: Grade.A },
  { name: "Bob", marks: 75, grade: Grade.B },
  { name: "Charlie", marks: 60, grade: Grade.C }
];

console.log("Student Records:");
students.forEach((student) => {
  console.log(`${student.name}: ${student.marks} (${student.grade})`);
});
```

2. **Compile and run:**
```bash
tsc students.ts
node students.js
```

**Output:**
```
Student Records:
Alice: 90 (Excellent)
Bob: 75 (Good)
Charlie: 60 (Average)
```

---

## **2.6 Summary**
✅ **Primitive Types**: `number`, `string`, `boolean`, `null`, `undefined`  
✅ **Complex Types**: `array`, `tuple`, `enum`  
✅ **Special Types**: `any`, `unknown`, `void`, `never`  
✅ **Type Assertions** for explicit casting  
✅ **Project:** Created a simple **Student Management System**  

---

### **Next Chapter: Functions and Type Annotations**
In the next chapter, we’ll learn:
- Function parameters & return types
- Optional and default parameters
- Function overloading
- Arrow functions in TypeScript

Would you like me to continue with **Chapter 3: Functions in TypeScript**? 🚀