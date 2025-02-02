// Function overload signatures
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

// Function implementation
function sum(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Sum of numbers
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; // Concatenation of strings
  }
  throw new Error('Invalid input types');
}

// Example usage:
console.log(sum(2, 3));        // Output: 5
console.log(sum('Hello', ' World'));  // Output: 'Hello World'
