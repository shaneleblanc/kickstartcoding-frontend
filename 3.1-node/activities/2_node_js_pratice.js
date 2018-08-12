/*
    This 90s music themed activity is intended to both get you used to using
    node.js, and give you more practice with JavaScript syntax.
*/


console.log('Challenge 1 --------------------------');
/*
    Right now, this will loop through every letter of the song lyrics.  Change
    the string into an array so that it will print each phrase (separated with
    a comma). You will only need to modify the lyrics variable to accomplish
    this.

    HINT: const is the same as let, but you use it for variables you won't be
    re-assigning later on.
*/

let lyrics = ['Hey', 'now', 'you\'re', 'an', 'all-star', 'get', 'your', 'game', 'on', 'go', 'play'];
for (const lyric of lyrics) {
    console.log(lyric);
}


console.log('Challenge 2 --------------------------');
/*
    Write an if statement that checks both that ableToTouchThis is false, AND
    that the "time" variable is equal to "hammer". Some example code is
    provided and commented out, but the condition is missing
*/
const ableToTouchThis = false;
const time = 'hammer';




if (!ableToTouchThis && time == 'hammer') {
    console.log("Can't touch this.");
    console.log("Stop! Hammer time.");
}




console.log('Challenge 3 --------------------------');
/*
    Modify the object called barbieGirl so that the if statement prints "Come
    on Barbie, let's go party!".
*/
const barbieGirl = {
  world: 'barbie',
  life: 'plastic',
  canBrushHair: true,
};
if (barbieGirl.world === 'barbie' &&
        barbieGirl.life === 'plastic' &&
        barbieGirl.canBrushHair) {
    console.log("Come on Barbie, let's go party!");
} else {
    console.log("Challenge 3 broken...");
}




console.log('Challenge 4 --------------------------');
/*
The following is a while loop. Modify it so that it repeats 5 times.
*/
let timesHit = 0;
while (++timesHit <= 5) { // <-- change this line
    console.log("Hit me baby one more time");
    // <-- add code here
}


console.log('Challenge 5 --------------------------');
/*
Context:
Node uses the "CommonJS" JavaScript variant to import other code. This is a
function called "require".
NOTE: This might be switched in future versions to the "ESM" import syntax, so
it will get closer to the JSX-variant syntax we will be using in React. See:
https://nodejs.org/api/esm.html for more information.


Instructions:
1. Look up the node documentation for "os": https://nodejs.org/api/os.html
2. Write the code to print the information of your first on your computer CPU.
*/
const os = require('os');
let cpus = os.cpus();
console.log(cpus[0]);


console.log('Challenge 6 --------------------------');
/*
Context: A "callback" is what we call a function that is passed as an
"argument" to another function, and is called when an operation finishes, such
as fetching from an API. They are one of the more difficult aspects of
JavaScript.
fs.readFile is how we access data in the harddrive.

Instructions: Add console.log to log out the "err" and the "data".
1. Can you figure out what each of these arguments contains?
2. Can you modify the code to cause "err" to not be null?

HINT: Because callbacks are invoked only later, the output will be after
everything else.
*/
const fs = require('fs');
callback = (err, data) => {
  console.log(err);
    console.log("Baby got (call) back");
}
fs.readFile("2_node_js_pratice.js", "utf-8", callback);


console.log('Challenge 7 --------------------------');
/*
Instructions:
1. Add a new property to the User class for "email".
2. Make it so that Alanis's email to be "ironic@dontchathink.com", adding
console logs as necessary to confirm it is working
3. Call the logIn method, also adding console logs as necessary to confirm it
is working
*/
class User {
    constructor(username, email) {
        this.username = username;
        this.isLoggedIn = false;
        this.email = email;
    }
    logIn() {
        this.isLoggedIn = true;
    }
}

const user = new User('alanis', 'ironic@dontchathink.com');
console.log("Alanis's email is:", user.email);



console.log('Bonus Challenge --------------------------');
/*
Rewrite Challenge 6 using alternative function syntax: () => {}
See the node documentation on FS for clues, as all their examples use this:
https://nodejs.org/api/fs.html
*/


/*
Advanced Challenge --------------------------

Node comes with an HTTP server built-in. Use the following code to see if you
can build a simple multi-page website using it.

1. Give it a couple pages to navigate between
2. Make a button that will count and increment a variable
*/

const http = require('http');
const url = require('url');

function serve(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/'){
    res.write(`
        <h1>Welcome to my site</h1>
        <a href="/results">Try this!</a>
    `);
    res.end();
  } else if (req.url === '/results'){
    res.write(`<h1>We made it!!</h1>
      `);
  }

    pathName= url.parse(req.url).pathname;
   query= url.parse(req.url).query;
   console.log('pathName' + pathName);
   console.log('query' + query);


}

const server = http.createServer(serve);
server.listen(8000); // uncommented this to get the server running
