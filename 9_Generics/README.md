### 📘 Generics in TypeScript

---

#### ✅ **What Are Generics?**

Generics allow you to create **reusable, type-safe** components (functions, classes, interfaces) that work with **any data type** without losing type information.
Think of them as **placeholders for types**.

---

#### ✅ **Generic Functions**

Instead of using `any`, you can use a **type parameter** (like `<T>`) to keep type safety.

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));
```

**Type inference** works too:

```ts
let result = identity("Alice"); // T inferred as string
```

**Multiple type parameters:**

```ts
function pair<K, V>(key: K, value: V) {
  return { key, value };
}

const obj = pair<string, number>("age", 25);
```

---

#### ✅ **Generic Interfaces**

You can make interfaces generic to work with different types.

```ts
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };
```

**With functions in interfaces:**

```ts
interface Repository<T> {
  getAll(): T[];
  add(item: T): void;
}
```

---

#### ✅ **Generic Classes**

Classes can also use generics to store and process various data types.

```ts
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);

const stringStore = new DataStore<string>();
stringStore.add("Alice");
stringStore.add("Bob");
```

---

#### ✅ **Generic Constraints**

You can restrict the types a generic can accept using `extends`.

```ts
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
// logLength(42); // ❌ Error: number doesn't have length
```

---

💡 **When to use Generics:**

* When creating reusable components.
* To ensure type safety without losing flexibility.
* For collections, data stores, or utility functions that handle multiple types.
