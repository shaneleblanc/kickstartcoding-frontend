const MongoClient = require('mongodb').MongoClient;

const pokedex = require('./pokedex.json');
// console.log(pokedex);

// mongo ds219432.mlab.com:19432/kcsandbox -u kcuser -p mongoerrday1
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const dbName = 'kcsandbox';

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  // Insert multiple documents... empty for now
  const documents = pokedex.pokemon;
  db.collection('pokemon').insertMany(pokedex.pokemon, (err, r) => {
    if (err) throw err;
    console.log("successfully inserted documents", r);
    client.close();
  });
});
