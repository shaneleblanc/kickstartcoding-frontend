# Lightning Front-end API Projects

1. Form your group. Groups must be 3-4 people. If you too few people,
merge with another tiny group, or kidnap someone from a large group.

2. Agree on 1-2 different APIs. Note that you are limited in your
choices because you can only select front-end friendly APIs (see below
on "Picking APIs"). You can always use this list to get ideas:
https://github.com/toddmotto/public-apis

3. Agree on an application that uses these APIs. If you can't quickly
agree on an application and APIs, then go with one of the suggestions at
the bottom of the page.

4. Form into the following roles: 1-2 API engineers (one for each APIs),
front-end designer, and front-end engineer.

5. Get to work! The work for each of the roles is explained below.





# Picking APIs

While all APIs are available from backed servers, only some APIs are
accessible directly from front-end JavaScript. This means that only some
of the APIs you see in the list above are available for you to use in
this exercise.

1. Any that require secrete API key are strictly forbidden.

2. For security purposes, most APIs don't allow CORS (cross-origin
resource sharing).

3. Some CORS-disabled APIs might still be usable via a proxy such as
https://corsproxy.github.io/


# CORS Group reflection questions
- Why can't you use one that has a API secret? Why would that be a huge
  a security issue?
- CORS is a Header sent back from the server. APIs that allow front-end
  APIs like what we are building must send back a special Header in the
  response that tells the browser to accept the response, even though
  the request came from a different domain. Why would enabling all a
  cross-domain request be a huge security issue?



# API Engineer
- You may need to sign-up to gain access to some of the APIs.
- Your goal is to get a "proof of concept" for the API working so that
  it fetches the desired necessary data using the JavaScript Fetch API
  package.
- Don't worry about the styling or DOM aspects. Just make sure you are
  getting the right information for your project and console.log'ing it
  to prove it.
- If you can get a single proof of concept working with the browser, go
  ahead and send the resulting data over to the front-end developer.
  They can use this data as "dummy data" to get started with integrating
  everything, only dropping your requests code when the time comes.
- If you have time, put your API code into a function that cleanly
  retrieves the data from the website.




# Front-end designer
- Using CSS and HTML only, create a design for your project. Just
  include placeholder content for now.
- Use CSS grid to get all your placeholders in the right spots.
- Feel free to look up flashy CSS tricks or animations online and see
  if you can integrate them,
- Also feel free to find stylish and modern CSS libraries to integrate.
  (Just don't use Bootstrap! That's no longer cool enough.)



# Front-end engineer
- Your goal is to tie everything together with DOM manipulation and
  logic
- Start with a plain HTML file, or one of our previous activities
  solutions.
- Work closely with the Designer to ensure you are creating
  elements with the right classes so they get styled correctly.
- Work closely with the API engineer(s) to get demo data set up in lieu
  of the complete project working.
- Since it will take some time to get the data from the API engineers,
  just create code to generate DOM elements with dummy data at first






# Example ideas

If you are having trouble deciding, then consider the following ideas:

## Example idea #1: Movie GIF search engine

- Using the OMDB API and the Giphy API, create a site that searches for
  information about movies, and then inundates the user with GIFs related
  to that movie title (pulled from Giphy)
- More features might also include ability to click on actors names, and
  see many GIFs including that actor.
- Feel free to use this API Key for OMDB: 187a5752


## Example idea #2: Map search with extra info

- Using either Mapbox or Google Maps, create an embedded searchable map
- Whenever a place is looked up, add extra information on the side -
  this could be Gifs (Giphy), information about movies (OMDB), weather,
  or any other Public APIs

