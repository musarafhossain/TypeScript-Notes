// Function to calculate the area
function calculateArea(shape) {
    if (shape.type === 'circle') {
        // Area of circle: π * radius^2
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.type === 'rectangle') {
        // Area of rectangle: width * height
        return shape.width * shape.height;
    }
    throw new Error('Unknown shape type');
}
// Example usage:
var circle = { type: 'circle', radius: 5 };
var rectangle = { type: 'rectangle', width: 10, height: 5 };
console.log(calculateArea(circle)); // Area of circle
console.log(calculateArea(rectangle)); // Area of rectangle
