const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    {
    typeGen
} = require('../utils/database_utils');

const instructor_information = new Schema({
    emp_id: typeGen(Schema.Types.String),
    firstname: typeGen(Schema.Types.String),
    middlename: typeGen(Schema.Types.String),
    lastname: typeGen(Schema.Types.String),
    gender: typeGen(Schema.Types.String),
    email: typeGen(Schema.Types.String),
    schedules: [{
        subject: typeGen(Schema.Types.String),
        year: typeGen(Schema.Types.String),
        section: typeGen(Schema.Types.String),
        building: typeGen(Schema.Types.String),
        day: typeGen(Schema.Types.String),
        start: typeGen(Schema.Types.String),
        end: typeGen(Schema.Types.String)
    }]
});

module.exports = mongoose.model('Instructor', instructor_information);