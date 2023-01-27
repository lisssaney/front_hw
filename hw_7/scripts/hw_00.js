let appointmentJSON = 
`{
    "appoint": 
    [
        {
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
        },
        {
            "title": "Second", 
            "location": "Street 55", 
            "duration": 22, 
            "date": "23.11.2023", 
            "time": "18:35",
            "particapants": 
            [
                {
                    "f_name": "Sarah",
                    "surname": "Paul",
                    "p_number": 12345678,
                    "confirmation": false
                },
                {
                    "f_name": "John",
                    "surname": "Smith",
                    "p_number": 987654321,
                    "confirmation": true
                }
            ]
        }
    ]
}`;

let appointment = JSON.parse(appointmentJSON);

let result;
let particapant;

for (let i in appointment.appoint)
{
    result = "\nTitle: " + appointment.appoint[i].title 
            + "\nLocation: " + appointment.appoint[i].location 
            + "\nDuration in minutes: " + appointment.appoint[i].duration
            + "\nDate: " + appointment.appoint[i].date
            + "\nTime: " + appointment.appoint[i].time;
    let extra = i + 1;
    alert("Appointment " + extra + result);
    for (let j in appointment.appoint[i].particapants)
    {
        extra = j + 1;
        particapant = "\nParticapant " + extra + " firtsname: " + appointment.appoint[i].particapants[j].f_name
            + "\nParticapant " + extra + " surname: " + appointment.appoint[i].particapants[j].surname
            + "\nParticapant " + extra + " phone number: " + appointment.appoint[i].particapants[j].p_number
            + "\nIs particapant " + extra + " confirmed: " + appointment.appoint[i].particapants[j].confirmation;
       alert(particapant);
    }
}
