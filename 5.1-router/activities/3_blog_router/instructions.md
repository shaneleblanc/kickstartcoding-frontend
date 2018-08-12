Blog Router

Getting started:
1. Copy the node modules directory from a previous activity into this
directory.

2. Then, install react-router-dom so you can use the Router:
    npm install react-router-dom

3. Finally, get it started by running:
    npm run start


----------------------
Challenge #1: Examining existing code

Look over how the Welcome and Contribute pages presently work.

1. Can you explain how the "if-statements" of the previous activity were
replaced with the React Router code you are seeing?

2. Can you find where the Welcome and Contribute page content is now residing?

----------------------
Challenge #2: Adding Blog page route

The Blog page component is already written for you.

1. Import the Blog page component

2. Add a new route for it, so that by visiting /blog/ you see it. You can test
this route


----------------------
Challenge #3: Adding Blog page link

Now, follow the pattern you see with the other components to add a link to the
new page.


----------------------
Challenge #4: Adding Contribute page

Following the same pattern as Challenge #1-#3, but start from scratch: Add a
page (in it's own component) that should contain at least an H1 tag with the
word "Contribute" (any other content is optional). Add a new link to the
navigation bar that causes this page to be displayed.


----------------------
Challenge #5: Showing individual blog pages

Now it's time to use React Router URL parameters. URL parameters are where an
ID or a title are inserted in part of the URL instead of fixed or static text.
This feature is also core to backend frameworks like Django, Node.js express,
and Rails.

How to specify URL parameters in a route:

    <Route path="/articles/:articleId" component={ShowSingleArticle} />

This would accept URLs like "/articles/123" or "/articles/some-article". The
last value can then be retrieved within the ShowSingleArticle component in a
specially named prop created by React Router:

    {this.props.match.params.articleId}

For Challenge #5:
1. Add another route to your Blog page route that includes the SingleBlogPost
page component.

2. Make sure it works by testing it in your browser.


----------------------
Challenge #6: Using match.params

Modify the SingleBlogPost code to only show a single Article, based on the
number specified.


----------------------
Challenge #7: Adding Links to each blog post

Finally, in the Blog page, add in Links to teach blog post that will take the
user to the SingleBlogPost page for that particular blog post.


----------------------
Bonus Challenge: Document title

Can you figure out how to use a add-on, to change the page title for each page?

Some suggestions:
* https://github.com/nfl/react-helmet
* https://github.com/gaearon/react-document-title

