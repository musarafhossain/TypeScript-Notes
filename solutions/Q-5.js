var numbers = [1, 2, 3, 4, 5];
function sum(numbers) {
    var result = 0;
    var i;
    for (i = 0; i < numbers.length; i++) {
        result = numbers[i] + result;
    }
    return result;
}
console.log("Sum : ".concat(sum(numbers)));
