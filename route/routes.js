var express = require('express')
var router = express.Router()
const MSME = require('../models/MSME.js')
const consultant = require('../models/Consultant.js')
const inAction = require('../models/In_Action.js')
const MonthlyProgress = require('../models/Monthly_progress.js')
const PreConsulting = require('../models/Pre_Consulting.js')
const Product = require('../models/Product')


// inserting a new MSME
router.post('/addMSME', async (req, res) => {
    let new_MSME = new MSME({
        Name: req.body.Name,
        Website: req.body.Website,
        Industry: req.body.Industry,
        Business_Model: req.body.Business_Model,
        Address: req.body.Address,
        Year_of_Establishment: req.body.Year_of_Establishment,
    })
    try {
        const result = await new_MSME.save()
        res.json({ msg: "your MSME has been added succefully" })
    }
    catch (error) {
        res.json(error)
    }

})
// adding new consultant
router.post('/addConsultant', async (req, res) => {
    let new_Consultant = new consultant({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email_Address: req.body.Email_Address,
        Mobile_Number: req.body.Mobile_Number,
        Experience: req.body.Experience,
        Country: req.body.Country,
        City: req.body.City,
        Area_Of_Experience: req.body.Area_Of_Experience,
        Role_Level: req.body.Role_Level,
        Industry: req.body.Industry,
        Date_Of_Birth: req.body.Date_Of_Birth,
    })
    try {
        let result = await new_Consultant.save();
        res.json({ msg: "your Consultant has been added succefully" })
    }
    catch (error) {
        res.json(error)

    }


})

module.exports = router;