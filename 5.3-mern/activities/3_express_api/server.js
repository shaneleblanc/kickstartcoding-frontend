const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());

function logger(req, res, next){
  console.log(req.method, req.url);
  next();
}
app.use(logger);

/////////////////////////////////////////////
// Configuration, change as necessary
const dbuser = 'shanedbuser';
const dbpassword = 'IEBnF9rJ3Q0i';
const MONGODB_URL = `mongodb://${dbuser}:${dbpassword}@ds018508.mlab.com:18508/kscoding`;
const MONGODB_DATABASE = 'kscoding';
const PORT = 3000;
/////////////////////////////////////////////



/*
  Challenge #1:
  1. Get the server running:
      npm install
      node server.js
  2. Figure out how to see the hello world message in your browser
*/

app.get('/', (request, response) => {
  response.json({
    hello: "world",
  });
});




/*
  Challenge #2: (R in CRUD)
  Make the necessary modification to get the /api/all/ route returning ALL
  Pokemon in the database.

  Hint: Node by default does not auto-restart when you make a change. This
  means you have to Ctrl+C and then run "node server" again every time. To run
  it with auto-restart, use "nodemon":
    npm install -g nodemon
    nodemon server.js
*/

app.get('/api/all/', (request, response) => {
  // Getting data from Database
  db.collection('pokemon')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        results: results,
      });
    });
});



/*
  Challenge #3: (R in CRUD)
  Make the necessary modification to this route to allow searching by type.

  Hint #1: Try going to /api/type/Water/, see what happens!
*/
app.get('/api/type/:typename/', (request, response) => {
  // Getting the type from the URL
  console.log('got request', request.params);
  const type = request.params.typename;
  console.log('the request mentioned this type:', type);

db.collection('pokemon')
  .find({type: type})
  .toArray((err, results) =>
    {
        if (err) throw err;
        response.json({results: results});
    });

});








/*
  Challenge #4:
  Now for the C in the CRUD API.

  1. Read the Hints and the code, and use CURL to test the POST route.
  2. Once you understand what is happening, add a weight property so that the
  new made-up Pokemon can have a weight.

  Hint #1: You can't test POST routes just using your browser. You'll have to
  either install a tool such as Postman or Insomnia, or use the command-line
  tool curl (see next hint).

  Hint #2: To use cURL to test this, try the following (very long) command in a
  new terminal:

    curl -X POST  -H "Content-Type: application/json" --data '{"name": "Bulbersour"}' http://localhost:3000/api/add/

  The upside of curl is its available everywhere and quick to use, the downside
  is the command ends up being very long and very tedious to edit on the
  command-line, so consider editing it in your text editor where you have more
  control, then pasting it into a terminal.
*/
app.post('/api/add/', (request, response) => {

  // Getting the data we want and putting it into a new object to insert into
  // the database
  const data = {
    name: request.body.name,
  };

  db.collection('pokemon')
    .insert(data, (err, results) => {
      if (err) throw err;

      // Send to client that we added it
      response.json({
        success: true,
        data: data,
      });
    });
});


/*
  Challenge #5:
  Now for the U in the CRUD API.
  
  1. Complete the following code to add a "catch" route, that will set
  "isCaught" to be true for a Pokemon of a given name

  2. Add a new GET route that will search for all "caught" pokemon

  Hint #1: To catch the Pokemon, you'll need to use the following syntax
    curl -X PUT http://localhost:3000/api/catch/Pikachu/
*/
app.put('/api/catch/:pokemonName/', (request, response) => {
  console.log('got request', request.params);

  response.json({
    challenge5: "not done...."
  });
});







/*
  Challenge #6:
  Use what you've learned to implement a DELETE route.
*/
app.delete('', (request, response) => {
});






// Some boilerplate here, don't worry too much about this.
// 1. Connect to the MongoDB
// 2. Start the server
let db;

MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
});
