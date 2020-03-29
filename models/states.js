const mongoose = require('mongoose');


var schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    countryId: {
        type: mongoose.Schema.Types.ObjectId
    },

    countryCode: {
        type: String,
        required: true
    },

    stateCode: {
        type: String,
        required: true
    },

    temp_country_id: {
        type: String
    },

    temp_id: {
        type: String
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    });

module.exports = mongoose.model('State', schema);