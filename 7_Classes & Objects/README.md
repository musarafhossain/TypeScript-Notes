### 📘 Introduction to Classes & Objects

---

#### ✅ **Definition**

A **class** is a blueprint for creating objects with properties and methods.
An **object** is an instance of a class.

---

#### ✅ **Fundamentals of Classes & Objects**

**Example:**

```ts
class Person {
  name: string;
  age: number;

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person();
person1.name = "Alice";
person1.age = 25;
person1.greet(); // Output: Hello, my name is Alice
```

---

#### ✅ **Constructors**

The `constructor` method is called when an object is created from a class.

```ts
class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Tesla Model 3", 2023);
```

---

#### ✅ **`this` Keyword**

`this` refers to the current instance of the class.

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
```

---

#### ✅ **Access Modifiers**

Access modifiers control visibility of class members:

| Modifier           | Description                                    |
| ------------------ | ---------------------------------------------- |
| `public` (default) | Accessible anywhere                            |
| `private`          | Accessible only within the class               |
| `protected`        | Accessible within the class and its subclasses |

**Example:**

```ts
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
```

---

#### ✅ **`readonly` Property**

A property that can only be assigned once, either at declaration or in the constructor.

```ts
class Book {
  readonly isbn: string;

  constructor(isbn: string) {
    this.isbn = isbn;
  }
}
```

---

#### ✅ **Optional Properties**

Use `?` to make properties optional.

```ts
class User {
  name: string;
  age?: number; // optional

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

#### ✅ **Parameter Properties**

Shorthand for declaring and initializing class properties from constructor parameters.

```ts
class Student {
  constructor(public name: string, private grade: number) {}
}
```

---

#### ✅ **Getters and Setters**

Used to control how properties are accessed and updated.

```ts
class Rectangle {
  private _width: number;

  constructor(width: number) {
    this._width = width;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value > 0) this._width = value;
  }
}
```

---

#### ✅ **Static Members**

Properties and methods that belong to the class itself, not instances.

```ts
class MathUtil {
  static PI = 3.1416;

  static circleArea(radius: number) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.circleArea(5));
```

---

#### ✅ **Abstract Classes**

Abstract classes can’t be instantiated directly.
They can have abstract methods that must be implemented by subclasses.

```ts
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

💡 **When to use Classes:**

* For object-oriented programming patterns.
* When you need reusable blueprints for objects.
* When encapsulation and inheritance are required.