const mongoose = require('mongoose');

var DBUrl = `your mongodb database access address`

mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Connection Successful");
})