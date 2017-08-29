const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen,
    refGen
} = require('../utils/database_utils');

const instructor_schedule = new Schema({
    emp_id: refGen('InstructorInformation'),
    Schedule : [
        {
            Day : typeGen(Schema.Types.String),
            TimeIn : typeGen(Schema.Types.String),
            TimeOut : typeGen(Schema.Types.String),
            Building : refGen('BuildingInformation')
        }
    ]
});

module.exports = mongoose.model('InstructorSchedule', instructor_schedule);