function printEmployee(employees) {
    employees.forEach(function (employee) {
        console.log("ID: ".concat(employee.id, ", Name : ").concat(employee.name, ", Role: ").concat(employee.role));
    });
}
var employees = [
    { id: 1, name: "Musaraf Hossain", role: "SDE-1" },
    { id: 2, name: "Abu Tanvir", role: "Team Leader" },
    { id: 3, name: "Jhon Doe", role: "Project Manager" },
];
printEmployee(employees);
