const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen,
    refGen,
    defaultDateNow,
} = require('../utils/database_utils');

const student_information = new Schema({
    sr_code: typeGen(Schema.Types.String),
    first_name : typeGen(Schema.Types.String),
    middle_name : typeGen(Schema.Types.String),
    last_name : typeGen(Schema.Types.String),
});

module.exports = mongoose.model('ClientVehicle', client_vehicle);