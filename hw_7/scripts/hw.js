let appointmentJSON = 
`{
    "title": "First", 
    "location": "Street 33", 
    "duration": 33, 
    "date": "22.02.2022", 
    "time": "14:30",
    "particapants": 
    [
        {
            "f_name": "Lisa",
            "surname": "Bikinejeva",
            "p_number": 89657869766,
            "confirmation": true
        },
        {
            "f_name": "Julia",
            "surname": "Leff",
            "p_number": 89219727566,
            "confirmation": false
        }
    ]
}`;

let appointment = JSON.parse(appointmentJSON);
const result = "Title: " + appointment.title 
            + "\nLocation: " + appointment.location 
            + "\nDuration in minutes: " + appointment.duration
            + "\nDate: " + appointment.date
            + "\nTime: " + appointment.time;

const particapant_1 = "\nParticapant 1 firtsname: " + appointment.particapants[0].f_name
                    + "\nParticapant 1 surname: " + appointment.particapants[0].surname
                    + "\nParticapant 1 phone number: " + appointment.particapants[0].p_number
                    + "\nIs particapant 1 confirmed: " + appointment.particapants[0].confirmation; 


const particapant_2 = "\nParticapant 2 firtsname: " + appointment.particapants[1].f_name
                    + "\nParticapant 2 surname: " + appointment.particapants[1].surname
                    + "\nParticapant 2 phone number: " + appointment.particapants[1].p_number
                    + "\nIs particapant 2 confirmed: " + appointment.particapants[1].confirmation; 


alert(result + particapant_1 + particapant_2);