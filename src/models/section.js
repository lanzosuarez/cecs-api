const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen,
    refGen
} = require('../utils/database_utils');

const section_information = new Schema({
        section_id: typeGen(Schema.Types.String),
        section_course: refGen('CoursesInformation'),
        section_year: typeGen(Schema.Types.String)
});

module.exports = mongoose.model('SectionInformation', section_information);