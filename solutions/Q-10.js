function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 10; }
    return price - (price * discount / 100);
}
console.log(calculateDiscount(100));
console.log(calculateDiscount(1000, 50));
