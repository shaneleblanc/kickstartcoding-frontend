const express = require('express');

// Configuration, change as necessary
const PORT = 3000;

// Express boilerplate
const app = express();
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

app.get('/', (request, response) => {
  response.json({
    hello: "world",
  });
});

