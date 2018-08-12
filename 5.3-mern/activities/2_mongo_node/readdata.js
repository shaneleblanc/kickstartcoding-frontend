const MongoClient = require('mongodb').MongoClient;

const dbuser = 'shanedbuser';
const dbpassword = 'IEBnF9rJ3Q0i';
const url = `mongodb://${dbuser}:${dbpassword}@ds018508.mlab.com:18508/kscoding`;
const dbName = 'kscoding';
let db;

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  db = client.db(dbName);


  /*
    *******************************************
    Challenge #1: Finish the code to find Pikachu.

    Hint: You'll need to use Ctrl+C to stop Node.js -- this is because the
    MongoDB connection stays open keeping Node.js running.
  */
  db.collection('pokemon')
    .find({name: "Pikachu"})
    .toArray((err, results) => {
      if (err) throw err;
      console.log("--------------------------------");
      console.log("Found Pikachu:", results);
      console.log("--------------------------------");
    });

  /*
    *******************************************
    Challenge #2:
    Using the above code as a template, write the code to find information on
    all Pokemon which have type "Water"

    Hint: To only display Pokemon names, use the following snippet:
      results.map(pokemon => pokemon.name).join(', ')
  */
  db.collection('pokemon')
    .find({type: "Water"})
    .toArray((err, results) => {
        if (err) throw err;
        console.log('--\nFound Water types: ' + results.map(pokemon => pokemon.name).join(', ') + '\n--');
    })





  /*
    *******************************************
    Challenge #3:
    Write the code to find information on all Pokemon which have both
    "Electric" AND "Psychic" in their "weaknesses" array.
  */

    db.collection('pokemon')
      .find({weaknesses: { $all: ["Electric", "Psychic"] }})
      .toArray((err, results) => {
          if (err) throw err;
          console.log('--\nFound Weak to Electric + Psychic: ' + results.map(pokemon => pokemon.name).join(', ') + '\n--');
      })



  /*
    *******************************************
    Challenge #4:
    1. Updating time!  Write the code to add a boolean value "inEgg": true to
    all Pokemon who DO NOT have the property {"egg": "Not in Eggs"}

    2. After it executes the line, write the find code to query this property
    and print out all the pokemon that have {inEgg: true}

    Hint #1: Look up "$ne" syntax
    Hint #2: Use {multi: true}
    Hint #3: You will modify about 74 documents
  */
db.collection('pokemon').update(
  {egg: {$ne: "Not in Eggs"}},
  {$set: {"inEgg": true}},
  {multi: true},
  (err, res) => {
    if (err) throw err;
    console.log(`${res.result.n} records modified.`);

    db.collection('pokemon')
      .find({inEgg: true})
      .toArray((err, results) => {
          if (err) throw err;
          console.log('--\nFound inEgg: true: ' + results.map(pokemon => pokemon.name).join(', ') + '\n--');
      })

  });
  /* 
    Advanced Bonus challenge:
    1. Write code that converts the weight of the Pokemon into a number (in
    Kilograms), instead of the string it is now.
    2. Write code to get the average weight of all Pokemon
    3. Write code to get the average weight of all Pokemon, aggregated by their
    egg status
    4. Write code to get the average weight of all Pokemon, aggregated by their
    types
  */


});
