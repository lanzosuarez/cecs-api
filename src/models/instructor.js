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
    email: typeGen(Schema.Types.String)
});

module.exports = mongoose.model('InstructorInformation', instructor_information);