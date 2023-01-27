var alphabet_name = [];
alphabet_name = "abcdefghijklmnopqrstuvwxyz -ABCEFGHIJKLMNOPQRSTUVWXYZ";

var alphabet_email = [];
alphabet_email = "abcdefghijklmnopqrstuvwxyz-ABCEFGHIJKLMNOPQRSTUVWXYZ1234567890@_."

function name_check(name)
{
    let arr = []; 
    arr = name;

    for (let j = 0; j < arr.length; j++)
    {
        if (!(alphabet_name.includes(arr[j])))
            return false;
    }
    return true;
}

function email_check(email)
{
    let arr = []; 
    arr = email;

    for (let j = 0; j < arr.length; j++)
    {
        if (!(alphabet_email.includes(arr[j])))
            return false;
    }
    return true;
}

let firstname = prompt("Enter your firstname: ");
while (name_check(firstname) == false)
{
    firstname = prompt("Enter your firstname one more time: ");
}

let lastname = prompt("Enter your lastname: ");
while (name_check(lastname) == false)
{
    lastname = prompt("Enter your lastname one more time: ");
}

let email = prompt("Enter your email address: ");
while (email_check(email) == false)
{
    email = prompt("Enter your email one more time: ");
}

alert("Your firstname: " + firstname + "\n" + "Your lastname: " + lastname + "\n" + "Your email: " + email)



