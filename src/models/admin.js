const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    {
        typeGen
    } = require('../utils/database_utils');

const string = Schema.Types.String;

const admin = new Schema({
    username: typeGen(string),
    password: typeGen(string),
    firstname: typeGen(string),
    lastname: typeGen(string),
    email: typeGen(string),
});

module.exports = mongoose.model('Admin', admin);