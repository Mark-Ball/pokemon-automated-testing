const mongoose = require("mongoose");

function dbConnect(db) {
    mongoose.connect(`mongodb://localhost/${db}`, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    mongoose.connection.on("error", error => console.log(error));

    return mongoose;
}

module.exports = dbConnect;