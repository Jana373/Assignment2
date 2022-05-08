const mongoose = require('mongoose')

const InActionSchema = mongoose.Schema({
    MSME_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MSME'
    },
    Consultant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    coaching_hours,
    starting_date

})
