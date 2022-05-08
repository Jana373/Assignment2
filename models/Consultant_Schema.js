const mongoose = require('mongoose')

const ConsultantSchema = mongoose.Schema({
    Consultant: {
        First_Name: {
            type: String
        },
        Last_Name: {
            type: String
        },
        Email_Address: {
            type: String
        },
        Mobile_Number: {
            type: String
        },
        Experience: {
            type: Number
        },
        Country: {
            type: String
        },
        City: {
            type: String
        },
        Area_Of_Experience: {
            type: String
        },
        Role_Level: {
            type: String
        },
        Industry: {
            type: String
        },
        Date_Of_Birth: {
            type: String
        },



    }

})
module.exports = mongoose.model("Consultant", ConsultantSchema);

