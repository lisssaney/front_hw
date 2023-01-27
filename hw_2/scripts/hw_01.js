let full_name = prompt("Enter your name: ");
let project = confirm("Is your project done? ");
let points = prompt("Enter the number of your points: "); 

if (points < 0 || points > 100)
    alert("Exam points do not belong to the valid range (0-100). Try again!\n");
else if (!project)
    alert(full_name + " failed the course, because the project is not done!\n");
else if (points < 40)
    alert(full_name + " passed the course with a grade " + 0);
else if (points < 50)
    alert(full_name + " passed the course with a grade " + 1);
else if (points < 60)
    alert(full_name + " passed the course with a grade " + 2);
else if (points < 70)
    alert(full_name + " passed the course with a grade " + 3);
else if (points < 85)
    alert(full_name + " passed the course with a grade " + 4);
else
    alert(full_name + " passed the course with a grade " + 5);