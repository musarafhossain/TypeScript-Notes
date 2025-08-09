### 📘 Introduction to Interfaces

---

#### ✅ **Defining Interfaces**

An **interface** in TypeScript is a way to define the structure (shape) of an object.
It specifies what properties and methods an object should have, but not their implementation.

**Example:**

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}
```

Here, any object that claims to be a `User` must have:

* `id` (number)
* `name` (string)
* `isAdmin` (boolean)

---

#### ✅ **Using Interfaces to Define Object Shapes**

You can use interfaces to enforce object structure.

**Example:**

```ts
interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

const item: Product = {
  id: 1,
  title: "Laptop",
  price: 999.99,
  inStock: true
};
```

---

#### ✅ **Optional Properties**

Use `?` to mark a property as optional.

```ts
interface Person {
  name: string;
  age?: number; // optional
}

const p1: Person = { name: "Alice" };
const p2: Person = { name: "Bob", age: 30 };
```

---

#### ✅ **Read-only Properties**

Use `readonly` to make a property immutable after initialization.

```ts
interface Car {
  readonly vin: string;
  model: string;
}

const myCar: Car = { vin: "1HGCM82633A004352", model: "Honda Accord" };
myCar.model = "Tesla Model 3"; // ✅ Allowed
// myCar.vin = "NEWVIN123"; // ❌ Error: Cannot assign to 'vin' because it is a read-only property
```

---

#### ✅ **Extending Interfaces**

Interfaces can inherit properties from other interfaces using `extends`.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const pet: Dog = {
  name: "Max",
  breed: "Golden Retriever"
};
```

You can extend multiple interfaces:

```ts
interface CanRun {
  speed: number;
}

interface CanSwim {
  swimSpeed: number;
}

interface Amphibian extends CanRun, CanSwim {}

const frog: Amphibian = {
  speed: 5,
  swimSpeed: 2
};
```

---

#### ✅ **Functions in Interfaces**

You can define function types in interfaces.

```ts
interface MathOperations {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const math: MathOperations = {
  add: (x, y) => x + y,
  multiply: (x, y) => x * y
};
```

---

💡 **When to use Interfaces:**

* To define the shape of an object for consistency.
* For type-checking complex objects.
* When you want to extend or merge definitions.