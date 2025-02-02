enum Grade {
    A = "Excellent",
    B = "Good",
    C = "Average",
    D = "Poor",
    F = "Fail"
}

type Student = {
    name: string;
    marks: number;
    grade: Grade;
};

let students: Student[] = [
    { name: "Alice", marks: 90, grade: Grade.A },
    { name: "Bob", marks: 75, grade: Grade.B },
    { name: "Charlie", marks: 60, grade: Grade.C }
];

console.log("Student Records:");
students.forEach((student) => {
    console.log(`${student.name}: ${student.marks} (${student.grade})`);
});
