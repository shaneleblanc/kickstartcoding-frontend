Componentization

Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start


----------------------
Challenge #1: Code comprehension

The first challenge involves reading the code of this app. Feel free to work
with someone next to you as you pick apart the application.

1. Can you list all child components being used?

2. Can you find where the code for each component is?



----------------------
Challenge #2: Breaking it apart

The app is presently mostly contained in one component. Refactor it into
smaller components.

* Create a ChannelSelector component -- pass the "channels" from the App.js as
  a prop.

* Create a ChatMessage component -- pass the "messages" from the App.js as a prop.

As a reminder, the general procedure for breaking apart components:

1. Copy & paste an existing component directory (always better to start with
something instead of having "blank file" syndrome!)

2. Name it in CamelCase whatever the name of the component will be -- for
example, ChatMessage or ChannelSelector.

3. Rename the CSS and JS files, and rename all references in each to your new
component name.

4. Move over the JSX code from the parent component into this child component.
Data that the child component needs should be "passed as a prop" (e.g.,
assigned with an attribute in the parent, and then accessed with
this.props.nameOfProp in the child component)

5. Import the child component in the parent component, and use it in lieu of
the JSX it replaces.

6. Finally, move over the CSS into the child component directory.



----------------------
Challenge #3: Breaking apart ChatMessage

Now, it's time to break apart the ChatMessage into a smaller components.

* Create a ChatMessage component. Move the code to display a single message
  into this component.

* Refactor the CSS to refer to a new class ChatMessage, to stay consistent with
  naming.

* Move SVGs as necessary to tidy things up.



----------------------
Challenge #4: Adding "star" feature

Add the necessary state and methods to the ChatMessage component such that when
you click on the "star", it will show it as filled in versus empty.

Hint: Add a state like:

    state = {
        isStarred: false,
    }

And a method like:

    toggleStar = () => {
        this.setState({
            isStarred: !this.state.isStarred,
        });
    }

And then in the JSX, optionally render the "empty" star vs the "full" star
based on which one was selected.





----------------------
Challenge #5: Adding channel selecting feature

Add the necessary state and methods to the ChannelSelector such that when you
click on a channel, it will show it as selected.

Hint: Add a state like:

    state = {
        channelSelected: 'parking-lot',
    }

And then in the JSX, compare the name of each channel with the selected
channel, and conditionally display the selected one with a different class.



----------------------
Challenge #6: Refactor NewMessage

Refactor the new message bar at the bottom into a new NewMessage component.


----------------------
Bonus Challenge:

1. How might you add the feature of displaying a count of the total number of
starred messages, up in the nav-bar?

2. How might you show the current channel at the top of the page?

