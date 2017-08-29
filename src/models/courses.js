const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen,
    refGen
} = require('../utils/database_utils');

const course_information = new Schema({
        course_id : typeGen(Schema.Types.String),
        course_desc : typeGen(Schema.Types.String),
        course_college : refGen('CollegesInformation')
});

module.exports = mongoose.model('CoursesInformation', course_information);