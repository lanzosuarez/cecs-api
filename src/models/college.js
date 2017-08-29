const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen
} = require('../utils/database_utils');

const college_information = new Schema({
        college_id : typeGen(Schema.Types.String),
        college_name : typeGen(Schema.Types.String),
        college_desc : typeGen(Schema.Types.String)
});

module.exports = mongoose.model('CollegeInformation', college_information);