interface Employee{
    id : number,
    name : string,
    role : string,
}

function printEmployee(employees: Array<Employee>): void{
    employees.forEach((employee)=>{
        console.log(`ID: ${employee.id}, Name : ${employee.name}, Role: ${employee.role}`);
    });
}

let employees : Array<Employee> = [
    {id: 1, name : "Musaraf Hossain", role : "SDE-1"},
    {id: 2, name : "Abu Tanvir", role : "Team Leader"},
    {id: 3, name : "Jhon Doe", role : "Project Manager"},
];

printEmployee(employees);