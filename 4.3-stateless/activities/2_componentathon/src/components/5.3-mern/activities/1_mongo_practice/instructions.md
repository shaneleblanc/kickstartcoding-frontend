Mongo Practice

Challenge #1
-------------------

1. Install MongoDB
    * Either locally
        * Ubuntu Linux: sudo apt-get install mongodb
        * macOS: brew install mongodb
    * Or sign up for a mlab database: https://mlab.com/

2. Connect to it
    * macOS: in one terminal, run mongod (the mongo server), in
      another terminal run "mongo"
    * Linux: Typically the mongo server should already be running once it's
      installed, so just run "mongo"

3. Switch to database "classactivity"
    * use classactivity


Challenge #2
-------------------

C in CRUD

1. Within a collection called "osmascots", insert each of these three
documents:
{ type: "penguin", name: "tux" }
{ type: "platypus", name: "hexley" }
{ type: "wildebeast", name: "gnu" }

Hint: Here's how to do it for "tux":
db.osmascots.insertOne({ type: "penguin", name: "tux" })


Challenge #3
-------------------

R in CRUD

1. Use "find" to see all the animals you added
2. Use "find" to selectively only find the platypus
3. Use "find" to selectively only find the penguin
4. Use "find" to selectively only find the animals named "gnu"


Challenge #4
-------------------
U in CRUD

Using "update", do the following:

- Update the penguin document to have a property called "mascotOf",
  equal to "Linux"
- Update the platypus to have "mascotOf" equal to "Darwin"
- Update the wildebeast to have "mascotOf" equal to "GNU Project"
- Confirm you were successful using "find"


Challenge #5
-------------------
D in CRUD

- One by one, delete each of the animals, using deleteOne
- After deleting each one, ensure you are deleting it using "find"


Challenge #6
-------------------
C in CRUD (More challenging)

- Open the lotr_info.txt document
- Insert each of these characters into a collection called "characters"
- Ensure you create their documents such that the "titles" attribute an
array of strings (not a single comma separated string)

Hint: Look up insertMany



Challenge #7
-------------------
R in CRUD

- Look up all characters in alphabetical order by actor
- Look up all characters in reverse alphabetical order by name
- Look up all characters with a title "Ring-bearer"
- Look up all characters with the title "Elf-friend"



Challenge #8
-------------------
U & D in CRUD

Hint: Look up {"multi": true}

- Push the title "Member of the Fellowship" to all characters
- Push the title "Ringbound" to all characters with the title "Hunter"
- Remove the title "Elf-friend" from Frodo



