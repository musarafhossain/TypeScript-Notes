let userName: string = 'Musaraf';
let userAge: number = 19;

function greetUser(name: string, age: number): string{
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greetUser(userName, userAge));