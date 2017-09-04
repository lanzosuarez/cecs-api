const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    {
    typeGen
} = require('../utils/database_utils');


const student_information = new Schema({

    sr_code: typeGen(Schema.Types.String),
    firstname: typeGen(Schema.Types.String),
    middlename: typeGen(Schema.Types.String),
    lastname: typeGen(Schema.Types.String),
    gender: typeGen(Schema.Types.String),
    email: typeGen(Schema.Types.String),
    year: typeGen(Schema.Types.String),
    section: typeGen(Schema.Types.String),
    schedules: [{
        day: typeGen(Schema.Types.String),
        timein: typeGen(Schema.Types.String),
        timeout: typeGen(Schema.Types.String)
    }]

});

module.exports = mongoose.model('StudentInformation', student_information);