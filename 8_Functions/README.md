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

#### ✅ **Object Destructuring in Function Parameters**

You can **destructure objects directly in function parameters** and type them in TypeScript.
This is especially useful with nested objects or promises.

**Basic destructuring with type annotation:**

```ts
type User = { name: string; age: number };

function greetUser({ name, age }: { name: string; age: number }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greetUser({ name: "Alice", age: 25 });
```

**Destructuring in arrow functions:**

```ts
const greetUserArrow = ({ name, age }: { name: string; age: number }) => {
  console.log(`Hello, ${name}, age ${age}`);
};

greetUserArrow({ name: "Bob", age: 30 });
```

**Destructuring a Promise object in async function:**

```ts
type ParamsType = { slug: string };

const page = async ({ params }: { params: Promise<ParamsType> }) => {
  const { slug } = await params; // destructure after promise resolves
  console.log(`Slug: ${slug}`);
};

// Example usage
const p: Promise<ParamsType> = Promise.resolve({ slug: "my-page" });
page({ params: p });
```

**Nested destructuring:**

```ts
type Data = { user: { name: string; age: number } };

function showUser({ data }: { data: Data }) {
  const { user: { name, age } } = data;
  console.log(name, age);
}

showUser({ data: { user: { name: "Alice", age: 25 } } });
```

**Generic destructuring with promises:**

```ts
const handle = async <T>({ payload }: { payload: Promise<T> }) => {
  const data = await payload;
  console.log(data);
};

handle({ payload: Promise.resolve({ id: 1, name: "Test" }) });
```

---

💡 **When to use object destructuring in function parameters:**

* To extract only the properties you need.
* To combine with **type safety** in TypeScript.
* To simplify handling of promises or nested objects.
* To make code concise and readable.

---

Do you want me to **add a visual diagram showing destructuring + async + promises**? It helps make this concept super clear.
