
// implementation of the database connection function
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.ATLAS_URI;

//const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var dbConnection;
module.exports = {

/*    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abdulai:<password>@cluster0.blt8o4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 const connectToServer = () => { client.connect(err => {
  const dbConnection = client.db("sample_training")
  if(err) {
      console.log("error connecting database");
      console.error(err);
  }
  else {
      console.log("database connected");
  }

  // perform actions on the collection object
  //client.close();
})};
 const getDb = () => {
    return dbConnection;
}

module.exports={
    connectToServer,
    getDb,
}
*/

    
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
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