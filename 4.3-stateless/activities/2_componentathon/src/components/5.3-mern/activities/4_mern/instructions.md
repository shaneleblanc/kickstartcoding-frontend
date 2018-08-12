Complete the Pokemon game, on your own!

For this challenge we won't give you any hints. The backend is written for you,
and some front-end is written for you to get going.

Your goal is to implement a Pokemon game as such:
    - When you click on the opposing Pokemon, your Pokemon should attempt to
      "attack" it
    - If the opposing Pokemon has a "weakness" toward your Pokemon, then it
      should say "Your attack was super effective", and display a button
      allowing you to "catch" the opposing Pokemon
        - If you click that button, it should mark the opposing Pokemon as
          "caught", and it should join your roster of caught Pokemon
        - It should then replace the opposing pokemon with a new random pokemon
    - Otherwise, it should say "Your attack was not very effective"

To get this going:

    Run at top level in one terminal:
        npm install
        node server.js
    Run in client/ in another terminal (or tab):
        npm start run   

Broad hints:

1. Think about previous activities. What sort of steps should you always take
first when approaching a new challenge?

2. What is a good, intermediate goal to set for yourself?

3. Think about applying each of the following tools:
    - Pseudocode
    - State-diagrams (VERY useful for React! It's why we learned them)
    - Component wireframe

4. Examine the API server code

5. MOST IMPORTANTLY, start experimenting and writing code! Don't just stare at
it. Change something, experiment, and see what happens. Just be careful to not
change too much at once, and always have your finger on the "undo" button :)



