function greet(name, age) {
    return age ? "Hello, ".concat(name, ". You are ").concat(age, " years old.") : "Hello, ".concat(name, ".");
}
console.log(greet("Musaraf Hossain", 20));
console.log(greet("Musaraf"));
