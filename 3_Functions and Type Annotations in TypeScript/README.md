# **Chapter 3: Functions and Type Annotations in TypeScript**  

## **3.1 Introduction to Functions in TypeScript**
Functions in TypeScript work similarly to JavaScript but with added **type safety**. You can specify the types for function parameters and return values, ensuring fewer runtime errors.

---

## **3.2 Defining Functions with Type Annotations**
### **3.2.1 Function Parameter Types**
You must specify the type of each parameter explicitly.

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
```

### **3.2.2 Return Type Annotation**
You can define the function’s return type after the parameter list.

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // 15
```
💡 **Note:** If no return type is specified, TypeScript infers it automatically.

---

## **3.3 Optional and Default Parameters**
### **3.3.1 Optional Parameters (`?`)**
You can mark a parameter as optional using `?`. It becomes `undefined` if not provided.

```ts
function introduce(name: string, age?: number): string {
  return age ? `My name is ${name}, I am ${age} years old.` : `My name is ${name}.`;
}

console.log(introduce("Bob"));         // My name is Bob.
console.log(introduce("Alice", 25));   // My name is Alice, I am 25 years old.
```

### **3.3.2 Default Parameters**
You can assign **default values** to parameters.

```ts
function applyDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}

console.log(applyDiscount(100));       // 90 (default discount is 10%)
console.log(applyDiscount(100, 20));   // 80 (custom discount of 20%)
```

---

## **3.4 Function Overloading**
Function overloading allows multiple function signatures for different argument types.

### **Example Without Overloading**
```ts
function getInfo(info: string | number): string {
  return `Info: ${info}`;
}

console.log(getInfo("Alice")); // Info: Alice
console.log(getInfo(25));      // Info: 25
```
💡 While this works, it doesn’t provide separate function signatures.

### **Function Overloading in TypeScript**
```ts
function getDetails(id: number): string;
function getDetails(name: string): string;
function getDetails(info: number | string): string {
  if (typeof info === "number") {
    return `User ID: ${info}`;
  } else {
    return `Username: ${info}`;
  }
}

console.log(getDetails(101));   // User ID: 101
console.log(getDetails("John")); // Username: John
```
🔥 **Why Use Overloading?**  
- Provides **better type safety**.
- Helps **IDE autocompletion** and documentation.

---

## **3.5 Arrow Functions (`=>`)**
TypeScript supports **arrow functions**, just like JavaScript.

```ts
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(5, 3)); // 15
```

💡 Arrow functions are useful for **callbacks**:
```ts
const names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach((name) => console.log(name));
```

---

## **3.6 Rest Parameters (`...args`)**
You can pass an **unlimited number of arguments** using the rest parameter syntax.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

---

## **3.7 Hands-on Project: Calculator App**
### **📌 Goal:** Build a simple calculator with functions for addition, subtraction, multiplication, and division.

1️⃣ **Create a file `calculator.ts`**  
```ts
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  return b !== 0 ? a / b : "Error: Division by zero";
}

console.log(add(10, 5));        // 15
console.log(subtract(10, 5));   // 5
console.log(multiply(10, 5));   // 50
console.log(divide(10, 2));     // 5
console.log(divide(10, 0));     // Error: Division by zero
```

2️⃣ **Compile and run:**
```bash
tsc calculator.ts
node calculator.js
```

---

## **3.8 Summary**
✅ Function **parameters** and **return types**  
✅ **Optional & default parameters**  
✅ **Function overloading** for multiple signatures  
✅ **Arrow functions** (`=>`) for concise syntax  
✅ **Rest parameters** (`...args`) for variable arguments  
✅ **Built a Calculator App**  

---

### **Next Chapter: Interfaces and Type Aliases**
In the next chapter, we’ll learn:
- How **interfaces** define object shapes
- Differences between **interfaces vs type aliases**
- Extending and merging interfaces
- Hands-on project: **Employee Management System**

Would you like me to continue with **Chapter 4: Interfaces and Type Aliases**? 🚀