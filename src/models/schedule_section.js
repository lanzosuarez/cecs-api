const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen,
    refGen
} = require('../utils/database_utils');

const section_schedule = new Schema({
    section_id: refGen('SectionInformation'),
    Schedule : [
        {
            Day : typeGen(Schema.Types.String),
            TimeIn : typeGen(Schema.Types.String),
            TimeOut : typeGen(Schema.Types.String),
            Building : refGen('BuildingInformation')
        }
    ]
});

module.exports = mongoose.model('SectionSchedule', section_schedule);