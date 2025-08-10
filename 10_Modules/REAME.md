### 📘 Modules in TypeScript

---

#### ✅ **Introduction to Modules**

A **module** is a file that contains related code (variables, functions, classes, interfaces, etc.) and can **export** or **import** them.
Modules help organize code into smaller, reusable, and maintainable pieces.

By default, **each TypeScript file is its own module** if it contains an `export` or `import` statement.

---

#### ✅ **Exporting from a Module**

You can export variables, functions, classes, interfaces, and more.

**Named exports:**

```ts
// mathUtils.ts
export const PI = 3.1416;

export function add(a: number, b: number): number {
  return a + b;
}

export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}
```

---

#### ✅ **Importing from a Module**

**Named imports:**

```ts
// app.ts
import { PI, add, Calculator } from "./mathUtils";

console.log(PI);
console.log(add(5, 10));

const calc = new Calculator();
console.log(calc.multiply(3, 4));
```

---

#### ✅ **Default Exports**

A module can have **only one** default export.

```ts
// logger.ts
export default function log(message: string) {
  console.log(`[LOG]: ${message}`);
}
```

Importing default exports:

```ts
import log from "./logger";
log("Hello, world!");
```

---

#### ✅ **Renaming Imports & Exports**

You can rename exports using `as`.

```ts
// mathUtils.ts
export { add as sum };
```

```ts
// app.ts
import { sum as addNumbers } from "./mathUtils";
console.log(addNumbers(3, 7));
```

---

#### ✅ **Re-exporting**

Re-export items from another module.

```ts
// index.ts
export * from "./mathUtils";
export { default as log } from "./logger";
```

---

#### ✅ **Using `as` in Imports**

`as` can also be used to avoid naming conflicts.

```ts
import { add as addition } from "./mathUtils";
console.log(addition(2, 3));
```

---

💡 **When to use Modules:**

* To split code into separate files for better organization.
* To avoid naming conflicts between different parts of the code.
* To create reusable utilities, components, or classes.