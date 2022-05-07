const mongoose = require('mongoose')

const MSMESchma = mongoose.Schema({

    MSME: {
        id,
        consultant_IDS: [],
        Monthly_progress: [
            {
                Month_Number,
                Number_Of_Employee,
                Number_Of_Customers,
                Revenue,
                Current_Stage


            }
        ],
        Products: [
            {
                Category,
                Name,
                Description,
                Price,
                Image_url


            }
        ],
        Pre_Consulting: {
            Begning_Stage,
            Expected_coaching_hours,
            Goal_stage
        },
        
        Name,
        Website,
        Industry,
        Business_Model,
        Address,
        Year_of_Establishment




    }
})

