interface User {
    name : string,
    age : number,
    email : string,
}

interface Person extends User {
    address : string,
}

let user : Person = {
    name : "Musaraf Hossain",
    age : 20,
    email : "musarafhossain@gmail.com",
    address : "MTB, CB, India",
}

console.log(`Name : ${user.name}\nAge : ${user.age}\nEmail : ${user.email}\nAdderss : ${user.address}`);