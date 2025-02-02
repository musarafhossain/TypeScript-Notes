function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

console.log(`30°C to Fahrenheit: ${celsiusToFahrenheit(30)}°F`);
console.log(`86°F to Celsius: ${fahrenheitToCelsius(86)}°C`);
