Component Style Library

This activity is the inverse of the previous activity. Once again, you will
work in the realistic scenario of a component library or style-guideline. This
time, however, the situation is reversed: The App.js that shows off the
components is already written for you, now you must be working on writing the
components themselves.

To know what type of props each component expects, you should inspect its usage
in App.js. Don't be thrown by the use of the new syntax, it's the same concept
of components as before, except with a shorthand syntax!

You should NOT modify App.js for this activity (except for the final bonus
challenge).


Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start

---------------------
Challenge #1: Button

Jump into the Button component source-code.

1. Use the clue provided in the source code to get the text to display

2. You'll need to attach the click event so that the counter works.

Remember: When using the shorthand syntax like we are doing here, it's "props",
not "this.props"!

---------------------
Challenge #2: FieldSet

This one will require quite a bit more props than the previous one. When done
correctly, you should be able to type into it, the name you enter should show
in "Name entered:", and it show the placeholder text, the label text, and the
legend text, kind of like:

    Name entered: jane

     ============================
    | Personal Information        |
      First Name
    |  ----------------------     |
      | jane                 |
    |  ----------------------     |
     ============================

---------------------
Challenge #3: Tabs

Now, implement a Tab list component. This will require use of ".map" to loop.


---------------------
Challenge #4: Tab selected

Make it so that the selected tab is shown as selected, and the click events
work such that when clicking on a tab it changes to that tab.



---------------------
Bonus Challenge #1: TagList

Tag list components are the type of component you might see on an application
such as Instagram where you can tag photos.  Make a tag list component, which
displays all the tags such that each tag has a button that can delete that tag,
and has an input box and a button to add new tags.

Hint: This one is especially tricky. You will want to use class syntax for it,
as it will need its own state: One of the few situations like this.


---------------------
Bonus Challenge #2: Tabs after TagList

Add code to make a set of tabs appear after the tag list that track the
contents of the tag list.

