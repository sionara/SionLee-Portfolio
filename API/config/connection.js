const { MongoClient, ObjectId } = require("mongodb"); //import MongoClient from mongodb

//DB values
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}${process.env.DB_HOST}/`;
const client = new MongoClient(dbUrl);

//MONGODB FUNCTIONS
module.exports = async function connection() {
  db = client.db("portfolio"); //if you have a default db in the connection, you can leave this blank
  console.log("connected with database");
  return db;
};
