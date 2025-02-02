var Grade;
(function (Grade) {
    Grade["A"] = "Excellent";
    Grade["B"] = "Good";
    Grade["C"] = "Average";
    Grade["D"] = "Poor";
    Grade["F"] = "Fail";
})(Grade || (Grade = {}));
var students = [
    { name: "Alice", marks: 90, grade: Grade.A },
    { name: "Bob", marks: 75, grade: Grade.B },
    { name: "Charlie", marks: 60, grade: Grade.C }
];
console.log("Student Records:");
students.forEach(function (student) {
    console.log("".concat(student.name, ": ").concat(student.marks, " (").concat(student.grade, ")"));
});
