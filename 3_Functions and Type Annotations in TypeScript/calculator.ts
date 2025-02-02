function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number | string {
    return b !== 0 ? a / b : "Error: Division by zero";
  }
  
  console.log(add(10, 5));        // 15
  console.log(subtract(10, 5));   // 5
  console.log(multiply(10, 5));   // 50
  console.log(divide(10, 2));     // 5
  console.log(divide(10, 0));     // Error: Division by zero
  