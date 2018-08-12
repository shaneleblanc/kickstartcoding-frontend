Animal Management

Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start

----------------------
Challenge #1: console.log & React Dev Tools

Adding console.log is always a good idea. Add one to the animal adding
method:

    console.log('adding a new animal!');

If you have React Dev Tools, also bring that up and use that to figure
out how the current form is working. Observe how adding elements
modifies the state (even if displaying the animals does not yet work).


----------------------
Challenge #2: Add a .map loop to show all animals

Add a .map loop to show all the animals. This should go in the JSX,
under the appropriate H2 element.

Hint:
    SOMETHING.map(animal => (
        <div>{animal}</div>
    ))


----------------------
Challenge #3: Number the animals

Modify the previous map to use use the "index" argument of map to number
the animals.

Hint:
    SOMETHING.map((animal, index) => (
        <div>{index}: {animal}</div>
    ))


----------------------
Challenge #4: Delete animals from array

Add a button to each animal that will delete that animal from the list.
This again will involve modifying the .map you created previously.

Hint: You will have to create a new method, and then pass to that method
the index of the animal that needs deletion.

----------------------
Bonus Challenge: .filter

Loop up the .filter method of arrays in JavaScript. Create a new .map
loop which uses .filter to show only animals that start with "c".

