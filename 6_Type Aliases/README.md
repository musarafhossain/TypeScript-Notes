### 📘 Introduction to Type Aliases

---

#### ✅ **Fundamentals of Type Aliases**

A **type alias** lets you create a custom name for a type.
They’re useful for simplifying complex type definitions and improving code readability.

**Syntax:**

```ts
type TypeName = TypeDefinition;
```

**Example:**

```ts
type UserID = number;
type Username = string;

let id: UserID = 101;
let name: Username = "Alice";
```

You can alias **primitive types**, **union types**, **tuple types**, and **object types**.

**Example with an object:**

```ts
type Product = {
  id: number;
  title: string;
  price: number;
};

const item: Product = {
  id: 1,
  title: "Laptop",
  price: 999.99
};
```

---

#### ✅ **Union Types with Type Aliases**

Type aliases often combine multiple possible types into one using the `|` operator.

```ts
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
// currentStatus = "unknown"; // ❌ Error: Type '"unknown"' is not assignable
```

---

#### ✅ **Intersection Types**

An **intersection type** (`&`) combines multiple types into one.
The resulting type must satisfy **all** combined type requirements.

**Example:**

```ts
type CanRun = {
  speed: number;
};

type CanJump = {
  jumpHeight: number;
};

type Athlete = CanRun & CanJump;

const player: Athlete = {
  speed: 10,
  jumpHeight: 2
};
```

---

#### ✅ **Differences Between Interfaces & Type Aliases**

| Feature                         | Interface   | Type Alias    |
| ------------------------------- | ----------- | ------------- |
| Extending                       | ✅ `extends` | ✅ using `&`   |
| Merging declarations            | ✅ allowed   | ❌ not allowed |
| Can represent unions            | ❌           | ✅             |
| Can represent primitives/tuples | ❌           | ✅             |

---

💡 **When to use Type Aliases:**

* For primitives, unions, tuples, or complex intersections.
* When you need a flexible name for a type that’s not purely object-shaped.
* When defining multiple combined types in one alias.
