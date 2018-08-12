Component Library

In this activity, you will be practicing using an existing component library,
and passing down props to components. Your most useful clues will be looking at
the source code to each of these components, and trying to deduce what is
required to use them. This can be done by looking for "this.props" within each
of these components: This will give you clues as to what you will need to
specify in order for the component to work. For example, if you see
"this.props.shouldShowMe", then you know you need to do "shouldShowMe={true}"
--- or something --- similar when using that component in App.js.

You should ONLY be modifying App.js for this activity.


Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start


---------------------
Challenge #1: Counter Button

Use the Button component to display a button that has the text "Click to
increment". This Button should increments the counter using the method
onButtonClick that has already been written for you

Hint #1: There already is some starter code for using Button, which means you
will only need to write a couple props to complete this activity.

Hint #2: This will require inspecting the code of the Button component to figure
out what props it expects, as they are not named what you might expect.


---------------------
Challenge #2: Counter Button #2

Create a brand new counter exactly like above, except it should say "Click me",
and be it should increment a separate counter.

Hint #1: Copy and modify the code you used for Challenge #1.

Hint #2: It's okay to not be DRY.


---------------------
Challenge #3: Use the Modal component

Your next challenge is to use a modal component. A "modal dialog" is one of
those annoying boxes that pop up and block the rest of the page. It should have
the title of "Modal example", and the contents of the "Modal ipsum" placeholder
text supplied.

Like the Button component, it is already written for you, but you will need to
write the code to use it.  This will require adding methods, state, and JSX to
use the Modal.

1. As a first step, create an modal that cannot be dismissed

2. Next, move the "Modal ipsum paragraph into it, and figure out how to make
the title of the modal say  "Modal example"

3. Then, add methods and state necessary to dismiss the modal -- this will
require new state and a method to modify it

4. Finally, add a button to show the modal, and make the modal not visible by
default but only when the button is clicked

Hint: To make it always show, use this prop: visibility={true}


---------------------
Challenge #4: Use the Dropdown component

Your next challenge is to use a Dropdown component. Like the Modal component,
it is already written for you, but you will need to add the necessary methods
and state to App.js to use it. Like before, you will need to look at its source
code and deduce what props and extra code might be needed to get it to toggle a
simple message saying "Dropdown contents".

Hint: It will not only require use of the component within the JSX, but also
additions of state, and methods to modify that state.


---------------------
Challenge #5: Move the second button into the dropdown

1. Move the second counter into the dropdown, such that it is displayed when
the dropdown is toggled

2. Add a paragraph tag that shows the total of the second counter

Hint: This is much more straightforward than the previous challenges.




---------------------
Library Research Challenge: Research "PropTypes" --
how might this have helped this activity?




