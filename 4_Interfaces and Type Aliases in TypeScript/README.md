# **Chapter 4: Interfaces and Type Aliases in TypeScript**  

## **4.1 Introduction to Interfaces and Type Aliases**
Interfaces and Type Aliases are two powerful ways to **define object structures** in TypeScript. They allow you to enforce type safety, improve code readability, and provide a structured way to work with objects.

### **Why Use Interfaces and Type Aliases?**
✔ Helps with **code organization** and **readability**  
✔ Enables **type checking** to avoid runtime errors  
✔ Supports **reusability** across multiple parts of your application  

---

## **4.2 What is an Interface?**
An **interface** in TypeScript defines the structure (shape) of an object.

### **4.2.1 Basic Interface**
```ts
interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "Alice",
  age: 25
};

console.log(user.name); // Alice
```
✅ **Benefits of Interfaces:**  
- Enforces a **strict structure**.  
- Ensures **objects have all required properties**.  

---

## **4.3 Readonly and Optional Properties**
### **4.3.1 Readonly Properties (`readonly`)**
You can make properties **immutable** using `readonly`.

```ts
interface Car {
  readonly brand: string;
  model: string;
}

let myCar: Car = { brand: "Tesla", model: "Model 3" };
myCar.model = "Model S";  // ✅ Allowed
// myCar.brand = "BMW";   // ❌ Error: Cannot assign to 'brand' because it is a read-only property.
```

### **4.3.2 Optional Properties (`?`)**
Some properties can be **optional**, meaning they may or may not exist.

```ts
interface Employee {
  name: string;
  department?: string;
}

let emp1: Employee = { name: "John" };  // ✅ No department
let emp2: Employee = { name: "Jane", department: "HR" };  // ✅ With department
```

---

## **4.4 Extending Interfaces (`extends`)**
You can **inherit** properties from another interface.

```ts
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let pet: Dog = {
  species: "Canine",
  breed: "Golden Retriever"
};
```
✔ **Reusability:** The `Dog` interface **inherits** properties from `Animal`.

---

## **4.5 Interface Merging**
TypeScript **merges** interfaces with the same name automatically.

```ts
interface Book {
  title: string;
}

interface Book {
  author: string;
}

let myBook: Book = {
  title: "TypeScript Guide",
  author: "John Doe"
};
```
✔ **Interfaces automatically merge**, so `Book` now has both `title` and `author`.

---

## **4.6 What is a Type Alias?**
A **Type Alias** is another way to define a structure. Unlike interfaces, aliases can define **primitive types, unions, tuples, and objects**.

### **4.6.1 Defining an Object Type**
```ts
type PersonType = {
  name: string;
  age: number;
};

let student: PersonType = { name: "Alice", age: 22 };
```

### **4.6.2 Using Type Aliases for Unions**
Type Aliases are great for **union types**.

```ts
type ID = string | number;
let userID: ID = 101;    // ✅ Allowed
userID = "ABC123";       // ✅ Allowed
// userID = true;       // ❌ Error: Type 'boolean' is not assignable to type 'ID'.
```

---

## **4.7 Key Differences: Interface vs Type Alias**
| Feature          | Interface | Type Alias |
|-----------------|-----------|-----------|
| Object Structure | ✅ Yes | ✅ Yes |
| Can Define Primitives (e.g., `string`, `number`) | ❌ No | ✅ Yes |
| Can Extend | ✅ Yes (`extends`) | ✅ Yes (via `&`) |
| Supports Merging | ✅ Yes | ❌ No |
| Can Use for Function Signatures | ✅ Yes | ✅ Yes |

💡 **Use `interface` when defining object structures and `type` for primitives/unions.**

---

## **4.8 Combining Types (`&` Operator)**
TypeScript allows merging multiple types using the **`&` (Intersection Type)** operator.

```ts
type Employee = { name: string; salary: number };
type Manager = { department: string };

type TeamLead = Employee & Manager;

let lead: TeamLead = {
  name: "Alice",
  salary: 60000,
  department: "IT"
};
```
✔ This creates a **new type** that contains all properties from `Employee` and `Manager`.

---

## **4.9 Hands-on Project: Employee Management System**
### **📌 Goal:** Build a system to manage employees with different roles.

1️⃣ **Create a file `employees.ts`**  
```ts
interface Employee {
  id: number;
  name: string;
  position: string;
}

interface Manager extends Employee {
  department: string;
}

type ContractEmployee = Employee & { hourlyRate: number };

const manager: Manager = {
  id: 1,
  name: "John Doe",
  position: "Manager",
  department: "Sales"
};

const contractWorker: ContractEmployee = {
  id: 2,
  name: "Jane Smith",
  position: "Developer",
  hourlyRate: 40
};

console.log(manager);
console.log(contractWorker);
```

2️⃣ **Compile and run:**
```bash
tsc employees.ts
node employees.js
```

---

## **4.10 Summary**
✅ **Interfaces** define object shapes and can be extended.  
✅ **Type Aliases** define objects, primitives, and unions.  
✅ **Interfaces merge automatically**, but **type aliases don’t**.  
✅ **Use `interface` for objects** and **`type` for unions/tuples/primitives**.  
✅ **Built an Employee Management System!**  

---

### **Next Chapter: Classes and Object-Oriented Programming in TypeScript**
In the next chapter, we’ll learn:
- How to define **classes** in TypeScript  
- Access modifiers (**public, private, protected**)  
- **Inheritance and abstract classes**  
- Hands-on project: **Building a User Authentication System**  

Would you like me to continue with **Chapter 5: Classes and Object-Oriented Programming**? 🚀