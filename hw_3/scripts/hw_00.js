function project_status(full_name, project, points)
{
    let grade;
    if (points < 0 || points > 100)
        return ("Exam points do not belong to the valid range (0-100). Try again!\n");
    if (!project)
        return (full_name + " failed the course, because the project is not done!\n");
    if (points < 40)
        grade = full_name + " passed the course with a grade " + 0;
    else if (points < 50)
        grade = full_name + " passed the course with a grade " + 1;
    else if (points < 60)
        grade = full_name + " passed the course with a grade " + 2;
    else if (points < 70)
        grade = full_name + " passed the course with a grade " + 3;
    else if (points < 85)
        grade = full_name + " passed the course with a grade " + 4;
    else 
        grade = full_name + " passed the course with a grade " + 5;
    return (grade);
}

let full_name = prompt("Enter your name: ");
let project = confirm("Is your project done?");
let points = prompt("Enter the number of your points: ");

alert(project_status(full_name, project, points));