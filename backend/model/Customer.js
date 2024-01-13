const mongoose = require('mongoose');

const CustomerModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number,
            unique: true,
            index: true // for better performance
        },
        "name": {
            require: true,
            type: String
        },
        "address": {
            type: String
        }
    },
    { versionKey: false }
)

const customer = mongoose.model('Customer', CustomerModel);
module.exports = customer;