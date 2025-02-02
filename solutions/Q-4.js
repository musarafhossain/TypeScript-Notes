var userName = 'Musaraf';
var userAge = 19;
function greetUser(name, age) {
    return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
}
console.log(greetUser(userName, userAge));
