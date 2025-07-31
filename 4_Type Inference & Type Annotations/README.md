### 📘 Type Inference & Type Annotations

---

#### ✅ **Type Inference**

TypeScript automatically infers (detects) the type based on the assigned value.

**Example:**

```ts
let name = "Alice";        // inferred as string
let age = 25;              // inferred as number
let isAdmin = true;        // inferred as boolean
```

You don’t need to explicitly write the type if it’s obvious from the context.

---

#### ✅ **Type Annotations**

You manually specify the type of a variable, parameter, or return value.

**Example:**

```ts
let username: string = "John";
let points: number = 100;
let isLoggedIn: boolean = false;
```

**Function with annotations:**

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

**Arrow function with annotations:**

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
}
```

---

✅ **When to use Type Annotations:**

* When variable is declared without initialization.
* For function parameters and return types.
* When the type is not clear from context.

**Example:**

```ts
let userId: number;  // must annotate, no initial value
userId = 101;
```

---