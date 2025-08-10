### 📘 Type Assertion, Type Casting & Non-null Assertion Operator

---

#### ✅ **Type Assertion**

Type assertion tells TypeScript to treat a value as a specific type.
It **does not** change the value at runtime — it only affects type checking.

**Syntax:**

```ts
value as Type
```

or

```ts
<Type>value
```

**Example:**

```ts
let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;

let anotherLength: number = (<string>someValue).length; // Alternative syntax
```

⚠ **Use when:** You are certain of the type but TypeScript cannot infer it.

---

#### ✅ **Type Casting (in DOM)**

Type assertions are often used for DOM element casting.

```ts
let input = document.querySelector("input") as HTMLInputElement;
input.value = "Hello";

// Alternative syntax:
let button = <HTMLButtonElement>document.querySelector("button");
button.innerText = "Click Me";
```

---

#### ✅ **Non-null Assertion Operator (`!`)**

When you are **sure** that a value is **not null or undefined**, you can use `!` to tell TypeScript to stop complaining.

```ts
let username: string | null = "Alice";

// We are certain username is not null here:
console.log(username!.toUpperCase());
```

**With DOM:**

```ts
const el = document.getElementById("myDiv")!;
el.innerHTML = "Updated Content";
```

⚠ **Caution:** Using `!` incorrectly can cause runtime errors if the value *is* actually `null` or `undefined`.

---

💡 **Summary:**

* **Type Assertion** – Override TypeScript’s inferred type.
* **Type Casting** – Commonly used for DOM elements.
* **Non-null Assertion** – Tell TypeScript that a value is definitely not `null` or `undefined`.