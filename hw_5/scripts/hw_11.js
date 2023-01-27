let error_func = (username_input, password_input) =>
{
    alert("the username " + username_input + " and/or the password " + password_input + "is incorrect. Try again!\n");
}

let welcome_func = (username_input) =>
{
    let currentdate = new Date(); 
    alert("Welcome to the web page user " + username_input 
    + "\nThe date is - " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() 
    + "\nThe time is - " 
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds());
}

function check_data(username, password, error, welcome)
{
    let username_input = prompt("Enter your username: ");
    let password_input = prompt("Enter your password: ");

    while ((username != username_input) || (password != password_input))
    {
        error(username_input, password_input);
        username_input = prompt("Enter your username: ");
        password_input = prompt("Enter your password: ");
    }
    if ((username == username_input) && (password == password_input))
        welcome(username_input);
}

let username = "lisa";
let password = "12345678";

check_data(username, password, error_func, welcome_func);
