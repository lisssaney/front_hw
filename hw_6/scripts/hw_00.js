student = 
{
    initValues: function(id, name, pr_work, ex_points)
    {
        this.id = id;
        this.name = name;
        this.pr_work = pr_work;
        this.ex_points = ex_points;
        this.grade = 0;
    },

    getGrade: function()
    {
       // var grade = 0;
        if (student.pr_work == false)
            alert("Project work is not done. You failed!");
        else
        {
            if (student.ex_points < 40)
                student.grade = 0;
            //    alert("Final grade is 0. The course is failed!");
            else if (student.ex_points < 50)
                student.grade = 1;
            else if (student.ex_points < 60)
                student.grade = 2;
            else if (student.ex_points < 70)
                student.grade = 3;
            else if (student.ex_points < 85)
                student.grade = 4;
            else
                student.grade = 5;
            // if (student.grade != 0)
            //     alert("The final grade is " + student.grade);
        }
    },

    getInfo: function()
    {
        alert("id : " + student.id + 
        "\nname: "  + student.name +
        "\nproject work: " +student.pr_work +
        "\nexam points: " + student.ex_points +
        "\nfinal grade: " + student.grade);
    }

}

let id = prompt("Enter your student ID: ");
let student_name = prompt("Enter your name: ");
let project_work = confirm("Have you done the project work?");
let exam_points = prompt("Enter your exam points: ");

while (exam_points > 100 || exam_points < 0)
    exam_points = prompt("Enter your exam points: ");

student.initValues(id, student_name, project_work, exam_points);
student.getGrade();
student.getInfo();

