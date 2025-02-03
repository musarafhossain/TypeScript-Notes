# **Chapter 1: Introduction to TypeScript**

## **1.1 What is TypeScript?**
TypeScript is a **strongly typed, object-oriented, compiled language** that builds on JavaScript. It was developed by **Microsoft** and is a **superset of JavaScript**. This means any JavaScript code is also valid TypeScript code, but TypeScript adds additional features like **static typing, interfaces, and better tooling support**.

### **1.1.1 Why Use TypeScript?**
TypeScript provides several advantages over JavaScript:
- **Static Typing**: Helps catch errors at compile time rather than runtime.
- **Object-Oriented Programming (OOP)**: Supports classes, interfaces, and modules.
- **Better Tooling**: Provides autocompletion, inline documentation, and refactoring in modern editors.
- **Code Maintainability**: Makes large projects easier to manage.
- **ES6+ Features**: Supports modern JavaScript features and compiles them to older versions for compatibility.

---

## **1.2 Installing TypeScript**
Before using TypeScript, you need to install it.

### **1.2.1 Prerequisites**
- Install **Node.js**: Download from [Node.js official website](https://nodejs.org).
- Install **npm** (comes with Node.js).

### **1.2.2 Installing TypeScript**
You can install TypeScript globally using npm:

```bash
npm install -g typescript
```

To verify installation:

```bash
tsc -v
```

---

## **1.3 Writing and Running TypeScript Code**
A TypeScript file has a `.ts` extension.

### **1.3.1 Creating Your First TypeScript File**
1. Create a new file **hello.ts**:
```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

2. Compile TypeScript to JavaScript:
```bash
tsc hello.ts
```
This generates **hello.js**.

3. Run the JavaScript file:
```bash
node hello.js
```

---

## **1.4 TypeScript vs JavaScript**
| Feature  | TypeScript | JavaScript |
|----------|-----------|------------|
| Static Typing | Yes | No |
| Interfaces | Yes | No |
| Compilation | Yes (tsc) | No |
| ES6+ Support | Yes | Partial |
| Tooling | Strong (IntelliSense, type safety) | Weaker |

---

## **1.5 TypeScript Compiler and Configuration**
### **1.5.1 Configuring TypeScript with tsconfig.json**
Instead of compiling manually, you can configure TypeScript using a **tsconfig.json** file.

1. Create a **tsconfig.json** file:
```bash
tsc --init
```

2. This generates a file like:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

3. Now, simply run:
```bash
tsc
```
It compiles all `.ts` files in the project.

---

## **1.6 Hands-on Project: Simple TypeScript App**
### **Project: Temperature Converter**
Create a program that converts temperature between Celsius and Fahrenheit.

1. **Create a new folder and navigate to it:**
```bash
mkdir temp-converter
cd temp-converter
```

2. **Initialize a TypeScript project:**
```bash
tsc --init
```

3. **Create a file `converter.ts` and write the following code:**

```ts
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

console.log(`30°C to Fahrenheit: ${celsiusToFahrenheit(30)}°F`);
console.log(`86°F to Celsius: ${fahrenheitToCelsius(86)}°C`);
```

4. **Compile and run the program:**

```bash
tsc
node converter.js
```

---

## **1.7 Summary**
- TypeScript is a superset of JavaScript with static typing.
- It provides better tooling and maintainability.
- Install TypeScript via `npm install -g typescript`.
- Use `tsc` to compile `.ts` files.
- Use `tsconfig.json` for project settings.
- Created a simple temperature converter project.

---

### **Next Chapter: TypeScript Basic Types**
In the next chapter, we will explore TypeScript's core types such as **number, string, boolean, array, tuple, enum, any, void, null, undefined, never, and object**.

Would you like me to continue with the next chapter? 😊