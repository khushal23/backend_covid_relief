const mongoose = require('mongoose');

module.exports = {

    isValidMongoId (str) {
        return mongoose.Types.ObjectId.isValid(str);
    }
}