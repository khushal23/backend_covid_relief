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

    stateId: {
        type: mongoose.Schema.Types.ObjectId
    },

    stateCode: {
        type: String,
        required: true
    },

    temp_id: {
        type: String
    },

    temp_state_id: {
        type: String
    },

    temp_country_id: {
        type: String
    },

    latitude: String,
    longitude: String

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    });

module.exports = mongoose.model('City', schema);