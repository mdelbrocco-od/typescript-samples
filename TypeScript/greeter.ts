function greeter(person: string) {
    return "Hello, " + person;
}
var user = "Content Management Team";
document.getElementById("greeting").textContent = greeter(user);
