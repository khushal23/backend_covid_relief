const mongoose = require('mongoose');


var schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    iso3: {
        type: String,
        required: true,
        maxlength: 3
    },

    iso2: {
        type: String,
        required: true,
        maxlength: 2
    },

    phoneCode: {
        type: String
    },

    capital: {
        type: String
    },

    temp_id: {
        type: String
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    });

module.exports = mongoose.model('Country', schema);