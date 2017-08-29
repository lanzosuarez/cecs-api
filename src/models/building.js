const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
{
    typeGen
} = require('../utils/database_utils');

const building_information = new Schema({
        building_id: typeGen(Schema.Types.String),
        building_name: typeGen(Schema.Types.String),
        building_location: typeGen(Schema.Types.String),
        building_desc: typeGen(Schema.Types.String)
});

module.exports = mongoose.model('BuildingInformation', building_information);