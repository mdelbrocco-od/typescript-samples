function greeter(person) {
    return "Hello, " + person;
}
var user = "Content Management Team";

document.getElementById("greeting").textContent = greeter(user);