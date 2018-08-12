Component Farm

Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start

----------------------
Challenge #1: Three Little Pigs

Do you see the code in src/App.js that displays the pig? Add two more pigs to
the page by duplicating that code.


----------------------
Challenge #2: Give the pig a button

Modify the Goat component to have a button. You can use the following code:

    <button>Feed me</button>

For now, the button won't do anything.

----------------------
Challenge #3: Create a goat component

Time to make a new component!

1. Duplicate the src/components/Goat as src/components/Goat

2. In this new directory, rename the Goat.jss and the Goat.css as Goat.js and
Goat.css

3. Import the Goat element in your src/App.js

4. Look in the "activity farm images" directory for an image of a goat

5. Add the Goat to your App.js

----------------------

Challenge #4: Enhance the "Inventory" component

The Stew, Fish, and Wheat components are already written for you. Add them to
the "Inventory" component

Hint: You will need to import them using a relative path. When using App.js,
"./components/" meant components since App.js was adjacent to the components
directory. Now, you will have to "go up one" to get to components, with "../"


----------------------

Challenge #5: Turn the "feed me" button into a counter

Using the code you've done previously to make a "counter" in React, turn the
"Feed me" button under the pig into a counter that counts the number of times
the pig has been fed. Note how it shows it for all the pigs.


----------------------

Advanced Challenge:

Look up "props". Can you DRY out this code to have a FarmAnimal component that
can be fed, and can be of different types?

