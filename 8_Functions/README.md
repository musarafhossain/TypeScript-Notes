### 📘 Functions in TypeScript

---

#### ✅ **Introduction to Functions**

Functions in TypeScript work similarly to JavaScript but with **type safety**.
You can define types for parameters and return values to catch errors at compile time.

**Example:**

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // ✅ Works
// greet(42); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

---

#### ✅ **Optional Parameters**

Use `?` to mark a parameter as optional.
Optional parameters must be placed **after required parameters**.

```ts
function sayHello(name: string, age?: number) {
  if (age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}.`);
  }
}

sayHello("Bob");
sayHello("Alice", 25);
```

---

#### ✅ **Default Parameters**

Assign a default value to a parameter if no argument is passed.

```ts
function multiply(a: number, b: number = 1): number {
  return a * b;
}

console.log(multiply(5));    // 5
console.log(multiply(5, 3)); // 15
```

---

#### ✅ **Rest Parameters**

Use `...` to accept multiple arguments as an array.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

#### ✅ **Function Overloads**

Function overloading lets you define multiple function signatures for a single function implementation.

```ts
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}

console.log(format("hello")); // "HELLO"
console.log(format(42));      // "42.00"
```

---

💡 **When to use Functions in TypeScript:**

* For code reusability and modularity.
* To enforce strict type contracts for inputs and outputs.
* To make code predictable and error-free.