let user_name = prompt("Enter your name: ");
let heigth = prompt("Enter your height in meters: ");
let weight = prompt("Enter your weight in kg: ");

let BMI = Math.round(weight / (heigth*heigth));

if (BMI <= 18)
    alert("The body shape of " + user_name + ": Underweight");
else if ((heigth == 2 && BMI < 25) || (heigth != 2 && BMI <= 25))
    alert("The body shape of " + user_name + ": Normal Range");
else if ((heigth == 2.05 && BMI == 30) || (heigth != 2.05 && BMI <= 29))
    alert("The body shape of " + user_name + ": Overweight");  
else 
    alert("The body shape of " + user_name + ": Obese");   

