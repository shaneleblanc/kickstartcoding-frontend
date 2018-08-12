Time to put EVERYTHING together for a full React + Python powered CRUD app!

The backend is written for you, and the core of the front-end is also written.
You need to flesh it out into a full CRUD blog.

To get this going:

    Run at top level in one terminal:
        python3 server.py
    Run in client/ in another terminal (or tab):
        npm start run   

Poke around a bit, try to understand what is going one. Then, one by one, add
CRUD features.

-------------------
Challenge #1: Read from backend on Blog page

Update the Blog page to "read" the blog data from the Backend. What you need is
already there, you just need to uncomment something. Can you understand what is
going on?


-------------------
Challenge #2: Read from backend on SingleBlogPost

Once again, get another read going. This code is more incomplete. This should
read in a single blog post.

Hint #1: Try visit http://localhost:8080/api/3 for a clue


-------------------
Challenge #3: Write code to Create new blog posts, in Contribute

On the Contribute page we need to implement the blog post creation form. Some
of the code is there, but not all of it. Can you figure out what it is doing
now, and how to fix it?




-------------------
Challenge #4: Delete in SingleBlogPost

Write code to Delete existing blog posts. It should be in the
SingleBlogPost page.

Hint #1: Start with a "delete" button that console.logs.

Hint #2: Sending a DELETE request to /api/3/delete/ will delete the blog post
with index 3




-------------------
Advanced Bonus Challenges:

* Update - Add in an update feature to Contribute, which allows modifying
  existing blog posts.

* Redirect - Research the unwieldy Redirect component on how to issue a
  redirect after changing something:

  https://tylermcginnis.com/react-router-programmatically-navigate/

