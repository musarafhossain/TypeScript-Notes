function isValidEmail(email: string): boolean{
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
const email = 'musaraf@gmail.com';
if(isValidEmail(email)){
    console.log(`${email} is a valid email address.`);
}else{
    console.log(`${email} is not a valid email address.`);
}