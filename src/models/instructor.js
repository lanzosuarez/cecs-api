const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen
} = require('../utils/database_utils');

const instructor_information = new Schema({
    username : typeGen(Schema.Types.String),
    password : typeGen(Schema.Types.String),
    instructor_information : {
        emp_id: typeGen(Schema.Types.String),
        first_name : typeGen(Schema.Types.String),
        middle_name : typeGen(Schema.Types.String),
        last_name : typeGen(Schema.Types.String),
        gender : typeGen(Schema.Types.String),
        email : typeGen(Schema.Types.String),
        photo : typeGen(Schema.Types.String,false)
    }
});

module.exports = mongoose.model('InstructorInformation', instructor_information);