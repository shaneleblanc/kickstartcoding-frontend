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
Challenge #1: Show the final phase

Update the Dashboard page to loop through the state, displaying the final
phase. Examine the code for the previous phases -- all that's necessary is
adding similar code in the final column.


-------------------
Challenge #2: Read tasks from the backend

Read in the Tasks from the backend, instead of it being hardcoded in the state

Hint #1: This will require adding a lifecycle method like this to the Dashboard
page:

    componentDidMount() {
        // Do something with fetch....
        fetch('......')
            .then(response => response.json())
            .then(data => {
                console.log('got data back', data);
                // Do something with this.setState...
            });
    }

Hint #2: Try visit http://localhost:8080/api/all for another clue


-------------------
Challenge #3: Write code to Create a new blog task, in CreateTask

On the CreateTask page we need to implement the submit feature of creating
tasks.

Hint #1: You'll need to use a POST request with this fetch. Some incomplete
code as a clue:

    const myData = {
        text: 'hi',
        title: 'hello',
        points: 12,
    };

    fetch('.........',
        { method: 'POST', body: JSON.stringify(myData) })
        .then(response => response.json())
        .then(data => {
            // do something....
        });

Hint #2: The API endpoint you need to use is /api/create/

Hint #3: Don't worry about the "id" field, the backend handles that





-------------------
Challenge #4: Implement phase "Update" in dashboard

Whenever the user changes the phase of one of the tasks, you want the change to
be reflected in the backend. This requires an Update (CRUD operation) to the
backend.

Hint #1: You'll need to use a PUT request with this fetch. Some incomplete code
as a clue:

    const myData = {
        phase: 3,
    };

    fetch('.........',
        { method: 'PUT', body: JSON.stringify(myData) })
        .then(response => response.json())
        .then(data => {
            // do something....
        });

Hint #2: The API endpoint looks like, for a post with ID 12: /api/12/update/




-------------------
Challenge #5: Implement delete

1. Create a new button on the frontend for deleting tasks

2.  Examine the server code to figure out how to issue a delete


-------------------
Bonus Challenge #1: Form validation

In the Create Task page: Avoid invalid form submissions by checking for a blank
title input before submitting.

-------------------
Bonus Challenge #2: Task Edit Page

* Create a brand new page for editing tasks. This will require a route with an
  :id in the path so that it knows which path to edit.

* This should allow editing of Task title, text, points, etc

* Create a Link to this task on each task on the Dashboard


-------------------
Code Architecture Questions:

1. How might we better refactor this code? E.g. In what spots is it not DRY?

2. Are we fetching duplicate data anywhere? How could we fix this problem?

