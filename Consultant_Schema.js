const mongoose = require('mongoose')

const ConsultantSchema = mongoose.Schema({
    Consultant: {
        id,
        First_Name,
        Last_Name,
        Email_Address,
        Mobile_Number,
        Experience,
        Country,
        City,
        Area_Of_Experience,
        Role_Level,
        Industry,
        Date_Of_Birth,
        MSMES: [{
            id,
            coaching_hours,
            starting_date
        }]


    }
})


