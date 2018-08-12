Refactor State

Getting started:
Copy the node_modules directory from a previous activity into this directory,
and then get started by running:

    npm run start

----------------------
Challenge #1: Fix adding new messages

The NewMesssage component is not being used correctly. You can't even type into
it. Can you fix it?

Hint #1: All the right code and data is there. You just need to pass the right
props.

Hint #2: The correct solution ONLY involves modifying App.js where it passes
props down to the NewMessage component.



----------------------
Challenge #2: Show current channel at top of page

Now, you are tasked with the (very realistic) task of moving state up to a
parent component. This is one of the most common refactoring tasks you'll do in
React.

This is tricky, as it will require several changes to several files.  This will
largely involve converting the references to "state" at the component level
into references to "props", and then moving that state along with the methods
needed to modify it to the App component, before finally passing down the state
AND the methods needed to modify it via props to the child components.

Broadly, you will follow the following steps:

1. Move the "selectedChannel" state to the App component file

2. Pass the "selectedChannel" down via a prop to the Nav component (this will
require changes in both App.js and Nav.js)

3. Move the "selectChannel" method from the ChannelSelector component up to
the App component, and pass it down via a prop to the ChannelSelector
component

4. Pass the "selectedChannel" state down via prop to both the
ChannelSelector component and the Nav component

Tie up any loose ends so that when you select a channel in the ChannelSelector
component, it will set the state


----------------------
Challenge #3: Move the star state to App.js

This is another challenging one. Your goal is to move the star-setting state to
the App Component, so that you can count the total number of stars that were
applied in the Nav.

Hint #1: You might want to structure your state in your App Component as such:

    state = {
        stars: [
            1,
            3,
            4,
        ]
    }

Hint #2: Your starring / unstarring logic might now look like this:

    toggleStar = (indexOfMessage) => {
        const stars = this.state.stars.slice(); // duplicate stars array

        // Check if the stars array is listing this message as starred
        if (stars.includes(indexOfMessage)) {
            // Presently starred, remove from array
            // (This is the way you remove a particular value from an array in
            // JavaScript, sadly there is no "remove" method.)
            stars.splice(stars.indexOf(indexOfMessage), 1);

        } else {
            // Not presently starred, add to array
            stars.push(indexOfMessage);
        }

        // Finally, set the state with the new stars
        this.setState({
            stars: stars,
        });
    }

Hint #3: You'll have to pass down the stars array, and check for inclusion in that array

----------------------
Challenge #4: Count the total stars in the Nav component

You've made it this far! Now make it so that the App component passes down the
total star count to the Nav component.



----------------------
Bonus Challenge: Implement Channel Logic

1. Separate out the different channels into separate arrays in state.

2. Optionally render each array depending on which one is selected.

3. When a message is sent, optionally show that message in one channel or
another.


