### 📘 TypeScript Basic Types

---

#### ✅ **Primitive Types**

**1. `number`**
Represents all numeric values (integers, floats, etc).

```ts
let age: number = 25;
```

**2. `string`**
Represents text values.

```ts
let name: string = "John";
```

**3. `boolean`**
Represents `true` or `false`.

```ts
let isActive: boolean = true;
```

---

#### ✅ **Array**

Used to store multiple values of the same type.

```ts
let scores: number[] = [90, 85, 75];
let names: Array<string> = ["Alice", "Bob"];
```

---

#### ✅ **Tuple**

An array with a fixed number and types of elements.

```ts
let user: [string, number] = ["Alice", 30];
```

---

#### ✅ **Enum**

A way to define named constants (numeric or string-based).

```ts
enum UserRole {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
let currentUserRole: UserRole = UserRole.ADMIN;
```

---

#### ✅ **Any**

Allows any type of value — disables type checking.

```ts
let data: any = 10;
data = "hello";
data = true;
```

---

#### ✅ **Unknown**

Represents any value, but safer than `any` because type checks are required before use.

```ts
let input: unknown = "text";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

---

#### ✅ **Void**

Used for functions that do not return a value.

```ts
function logMessage(): void {
  console.log("Logged");
}
```

---

#### ✅ **Null**

Represents an intentional absence of value.

```ts
let value: null = null;
```

---

#### ✅ **Undefined**

Indicates a variable that has been declared but not assigned.

```ts
let temp: undefined = undefined;
```

---

#### ✅ **Never**

Represents values that never occur (e.g., functions that throw errors or infinite loops).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---