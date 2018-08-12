# Node & NPM

Ensure you have node and npm by running each of the following commands:

    node --version
    npm --version

If you get "command not found", that means you don't have node or npm
installed.

    Ubuntu Linux:
        sudo apt-get install nodejs
    macOS:
        brew install node


# Configuring NPM for global installs

1. Make the local home directory:

    mkdir ~/.local

2. Configure NPM:

    npm config set prefix ~/.local  

3. Open ~/.bashrc (Ubuntu Linux) or ~/.profile (macOS) with your editor.
    Ubuntu Linux:
        gedit ~/.bashrc
    macOS:
        open ~/.profile

4. Add in the following code at the very end:

    PATH=~/.local/bin/:$PATH

5. Close and restart your terminal window.

# Install create-react-app

Install this by running:

    npm install -g create-react-app

If you get an error at this step, make sure you followed the previous
steps.

To test, run "create-react-app":

    $ create-react-app
    Please specify the project directory:
        create-react-app <project-directory>

    For example:
        create-react-app my-react-app

    Run create-react-app --help to see all options.

If you saw something similar to the above text, you are good to go!


# Using create-react-app

Once installed, it can be used to start new React projects. In a
terminal that is in the directory where you want to work, type something
like:

    create-react-app my-new-project

With "my-new-project" being the name of the project you are creating, in
kebab-case. This might take a minute, as it downloads and installs about
200 megabytes of dependencies. React is huge... both in popularity, and
in size!

Once it's done, cd into the new directory created, as such:

    cd my-new-project
    ls

You will see something like:

    node_modules  package.json  public  README.md  src

See the package.json? Good, you are in the right spot.  Finally, run:

    npm run start

If all went well, you should see Welcome to React, along with a rotating
playfully rotating logo!

