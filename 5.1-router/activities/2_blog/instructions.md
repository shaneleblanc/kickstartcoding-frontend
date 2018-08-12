Blog

Getting started:
Copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start

----------------------
Challenge #1: Fixing link to blog

1. Examine how the onAboutClick "link" works. Can you explain what is happening
to cause the "About" content to display? Why can't you go back to the previous
"page"?

2. Fill in the onBlogClick method to make it display the Blog "page".


----------------------
Challenge #2: Adding link to Welcome "page"

Using the pattern from Challenge #1, create a new link titled "Welcome" that,
when clicked, displays the initial "welcome" page


----------------------
Challenge #3: Create a new Contribute "page"

Following the same pattern as Challenge #1 & #2, then create a new page
that should contain an H1 tag with the word "Contribute" (any other content
is optional). Add a new link to the navigation bar that causes this page to
be displayed.



----------------------
Bonus Challenge #1: Refactor each page to a method

A common pattern is to break apart huge render methods into separate smaller
render methods, as such:

    renderAbout() {
      return (
        <div>
            <h1>About</h1>
            ...etc
        </div>
      )
    }

Within the "real" render method, you can select which render method to use,
as such:

      {this.state.page === 'about' ? (
        this.renderAbout()
      ) : null}


----------------------
Bonus Challenge #2: Refactor into a renderContent method

Instead of having repetitive and verbose, ternary operators, move the selection
of the page into a single renderContent method, something like this:

    renderContent() {
      if (this.state.page === 'about') {
        return this.renderAbout();
      }
      // ...etc
    }



----------------------
Bonus Challenge #3: Refactor click methods

Refactor the click methods into a single method.  This new method should
receive an argument that specifies which page you are linking to.


----------------------
Bonus Challenge #4: Refactor blog pages into array

Move the blog pages into an array, which you use .map to iterate over rendering
the Article elements.


----------------------
Bonus Challenge #5: Look up the 'key' warning

Look up the "Missing 'key' prop for element in array" error, which you likely
will be encountering at this point. Can you figure out what is going on? Can
you fix it?


