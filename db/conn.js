
// implementation of the database connection function
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.ATLAS_URI;
var dbConnection;


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var dbConnection;
module.exports = {

    
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                console.error("failed to connect to databse", err);
                return callback(err);
            }
            dbConnection = db.db("sample_training");
            console.log("Connected to blog database");
        
        });
    },

    getDb: function () {
        return dbConnection;
    },
}