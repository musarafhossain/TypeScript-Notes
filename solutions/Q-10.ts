function calculateDiscount(price: number, discount: number = 10): number {
    return price - (price * discount / 100);
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(1000, 50));