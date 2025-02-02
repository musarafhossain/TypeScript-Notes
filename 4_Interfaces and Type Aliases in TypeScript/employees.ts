interface Employee {
    id: number;
    name: string;
    position: string;
}

interface Manager extends Employee {
    department: string;
}

type ContractEmployee = Employee & { hourlyRate: number };

const manager: Manager = {
    id: 1,
    name: "John Doe",
    position: "Manager",
    department: "Sales"
};

const contractWorker: ContractEmployee = {
    id: 2,
    name: "Jane Smith",
    position: "Developer",
    hourlyRate: 40
};

console.log(manager);
console.log(contractWorker);
