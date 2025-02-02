let numbers: Array<number> = [1, 2, 3, 4, 5];
function sum(numbers: Array<number>): number {
    let result: number = 0;
    let i: number;
    for (i = 0; i < numbers.length; i++) {
        result = numbers[i] + result;
    }
    return result;
}
console.log(`Sum : ${sum(numbers)}`);