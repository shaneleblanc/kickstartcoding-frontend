/*
    Scenario: You landed a job as a front end engineer at a new start-up called
    Cognize. You aren't clear on what the company does, but you are given a
    series of tasks to improve the homepage.
*/



/*
    Challenge #1: Loading this script
    1. Add a console.log to this script file to check if it's being loading.
    Hint: it isn't.

    2. Figure out why it isn't being loaded.

    3. Can you identify the problem? Fix it, and confirm that the console.log
    shows the script being loaded.

    Hint: The problem is it is not getting included via a script tag in the
    HTML.
*/


/*
    Challenge #2: Try Cognize Button
    This code is supposed to run when you click the Try Cognize button at the
    top of the page. Can you debug what is going on that is keeping it from
    changing the text?
*/

function tryCognize() {
    let element = document.querySelector('h1');
    element.textContent = 'Bé Cognizé';
}

function accordion() {
    let element = document.querySelector('#more-info');
    let button = document.querySelector('#more-info-button');
    element.classList.toggle('Accordion--collapsed');
    if(element.classList.contains('Accordion--collapsed')){
      button.textContent = 'Learn more ↓';
    } else {
      button.textContent = 'Learn more ↑';
    }
}

/*
    Challenge #3: "Accordion" effect
    The Learn More button is supposed to toggle the visibility of the div with
    ID more-info. This is sometimes called an accordion effect.

    1. Create a new function and hook it up with an onClick event to the Learn
    More button. Ensure it works using console.log.

    2. Inside this function, toggle the class "Accordion--collapsed". Can you
    figure out how it is doing the sliding animation?
*/


/*
    Challenge #4: Toggle arrow
    Make the text on the previous button alternate the arrow used in the text,
    either ↑ or ↓
*/


/*
    Bonus Challenge: Decipher Terrible Code
    A developer who is no longer with Cognizé wrote code to put logos on the
    page. Figure where this code is, and see if you can decipher the hideous
    code, and then rewrite it in a cleaner way. It's okay if it is not 100% the
    same behavior, as long as its mostly the same.
*/
