interface Person {
    name : string,
    age : number,
    email : string,
}

let user : Person = {
    name : "Musaraf Hossain",
    age : 20,
    email : "musarafhossain@gmail.com",
}

console.log(`Name : ${user.name}\nAge : ${user.age}\nEmail : ${user.email}`);