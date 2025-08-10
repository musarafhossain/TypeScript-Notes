### 📘 Type Guards & TypeScript Utility Types

---

## **Part 1 – Type Guards**

---

#### ✅ **What Are Type Guards?**

Type guards are techniques to narrow down the type of a variable within a specific block of code.
They help TypeScript understand what type you’re working with at a given moment.

---

#### ✅ **Using `typeof`**

Checks the type of a primitive value.

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // string-specific method
  } else {
    console.log(id.toFixed(2)); // number-specific method
  }
}
```

---

#### ✅ **Using `instanceof`**

Checks if an object is an instance of a specific class.

```ts
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

---

#### ✅ **Custom Type Predicates**

You can create functions that tell TypeScript about a specific type.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

---

## **Part 2 – TypeScript Utility Types**

---

#### ✅ **`Partial<T>`**

Makes all properties in a type **optional**.

```ts
interface User {
  name: string;
  age: number;
}

const updateUser = (user: Partial<User>) => {
  // can update only some fields
};

updateUser({ name: "Alice" });
```

---

#### ✅ **`Required<T>`**

Makes all properties in a type **required**.

```ts
interface Person {
  name?: string;
  age?: number;
}

const fullPerson: Required<Person> = {
  name: "Bob",
  age: 30
};
```

---

#### ✅ **`Readonly<T>`**

Makes all properties in a type **immutable**.

```ts
interface Config {
  host: string;
  port: number;
}

const serverConfig: Readonly<Config> = {
  host: "localhost",
  port: 8080
};

// serverConfig.host = "127.0.0.1"; // ❌ Error
```

---

💡 **Summary:**

* **Type Guards** – Narrow down a variable’s type at runtime (`typeof`, `instanceof`, custom predicates).
* **Utility Types** – Quickly transform existing types (`Partial`, `Required`, `Readonly`).
