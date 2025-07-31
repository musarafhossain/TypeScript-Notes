### 📘 Setting Up Environment for TypeScript — Notes

---

#### ✅ 1. Installing Node.js & npm

* Required to install TypeScript via `npm`.
* Download from: [https://nodejs.org](https://nodejs.org)
* Verify installation:

```bash
node -v
npm -v
```

---

#### ✅ 2. Installing TypeScript Globally

```bash
npm install -g typescript
```

* Verifies TypeScript is installed:

```bash
tsc -v
```

---

#### ✅ 3. Installing Essential VS Code Extensions

Install these in VS Code (from Extensions tab or Command Palette):

| Extension                        | Purpose                       |
| -------------------------------- | ----------------------------- |
| **ESLint**                       | Linting and code quality      |
| **Prettier**                     | Code formatting               |
| **Prettier ESLint**                     | Code formatting               |Autocomplete npm modules      |
| **JavaScript and TypeScript Nightly**             | -      |
| **Pretty TypeScript Errors**             | -      |

---

#### ✅ 4. Setting Up a TypeScript Project (Manual Setup)

**Step 1: Create Project Folder**

```bash
mkdir ts-project && cd ts-project
npm init -y
```

**Step 2: Install TypeScript Locally (optional but preferred)**

```bash
npm install typescript --save-dev
```

**Step 3: Initialize TypeScript Config**

```bash
npx tsc --init
```

This creates a `tsconfig.json` file. It controls TypeScript behavior.

**Important Options in `tsconfig.json`:**

```json
{
  "target": "es6",               // JS version to compile to
  "module": "commonjs",          // Module system
  "outDir": "./dist",            // Output directory
  "rootDir": "./src",            // Source directory
  "strict": true                 // Enable all strict type checks
}
```

**Step 4: Create Folder Structure**

```
ts-project/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
```

**Step 5: Compile TypeScript**

```bash
npx tsc
```
**Compile TypeScript and Realtime Watch**

```bash
npx tsc --watch
```

* Compiles `src/index.ts` → `dist/index.js`
