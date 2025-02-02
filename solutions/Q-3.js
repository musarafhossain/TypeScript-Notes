function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
var email = 'musaraf@gmail.com';
if (isValidEmail(email)) {
    console.log("".concat(email, " is a valid email address."));
}
else {
    console.log("".concat(email, " is not a valid email address."));
}
