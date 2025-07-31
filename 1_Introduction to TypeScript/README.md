### 📘 Introduction to TypeScript — Notes

#### ✅ What is TypeScript?

* A **superset of JavaScript**.
* Adds **static typing** to JavaScript.
* Developed and maintained by **Microsoft**.
* Files use the extension: `.ts`.

#### ✅ Why use TypeScript?

* **Type safety**: catches errors at compile time.
* **Better tooling**: intelligent code completion, navigation, and refactoring.
* **Scalable codebase**: suitable for large applications.
* **Optional static typing**: you can gradually adopt it.

#### ✅ How TypeScript works

* Code is written in `.ts` files.
* It is **compiled to JavaScript** using the TypeScript compiler (`tsc`).
* The output is standard JavaScript that runs in any browser or JS environment.

#### ✅ Key Differences from JavaScript

| JavaScript             | TypeScript                   |
| ---------------------- | ---------------------------- |
| Dynamically typed      | Statically typed             |
| No interfaces or types | Has interfaces, types, enums |
| Less tooling support   | Strong IDE support           |

#### ✅ Install TypeScript

```bash
npm install -g typescript
```

#### ✅ Compile TypeScript to JavaScript

```bash
tsc filename.ts
```