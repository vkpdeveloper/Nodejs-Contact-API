const mongoose = require('mongoose');

const contact_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Contact", contact_schema);