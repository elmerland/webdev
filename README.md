# Web Development @ VT Club

Welcome to the repo for the Web Development Club website. This repository contains all the files and directories that make up our web page. If you wish to contribute to this project you will find installation instructions below.

Web development usually consists only of text files (HTML, CSS, and JS) which do not need to be [compiled](http://en.wikipedia.org/wiki/Compiler). However, to better manage large projects or projects with multiple contributors it is often convenient to have certain management tools that make it easier to administer projects. This is why this repo requires certain software to be installed correctly. Some effort has been made to choose OS-agnostic software. Meaning that it should work in all three major OS platforms i.e. Linux, Macintosh (Apple), and Windows. A list of tools and the reason for their use is included in this README file. In addition, some instructions on how to install these tools are also provided. Because of the breadth of OS flavors and configurations is it impossible to provide a comprehensive installation guide. And so, it is up to you (the user) to determine the best way to install the necessary tools. If you encounter a problem with installation feel free to create a new issue with a detailed description of your problem.

## Dependencies

This is a list of all the dependencies and tools used by this project
- [Git](http://git-scm.com/): A version control tool, it helps to keep track of changes.
- [GitHub](https://github.com/): A social front end to Git. It provides a friendly interface for users to interact with.
- [Gulp JS](http://gulpjs.com/): A project builder tool. Gulp allows for project configurations to be set in a way that is easy to distribute to all developers.
- [npm](https://www.npmjs.org/): A package manager that is required by Gulp
- [Node JS](http://nodejs.org/): A JavaScript engined that is required by npm
- [Sass](http://sass-lang.com/): A compiler for CSS (installed through npm automatically)

You should also be aware of the browser version you are using. This is not really a requirement, it is more of a website compatibility issue. But you should make sure to have the latest version of multiple browsers.

## For beginners

The following instructions assume some familiarity using a terminal. Mainly, navigating files inside of the terminal, launching programs, and inspecting directories. If you are not familiar with this please take a few minutes to get familiar with it. These are some tutorials that you can go through:
- Terminal for linux:
    - http://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/
    - https://help.ubuntu.com/community/UsingTheTerminal
    - http://cli.learncodethehardway.org/book/
- Terminal for mac:
    - http://computers.tutsplus.com/tutorials/40-terminal-tips-and-tricks-you-never-thought-you-needed--mac-51192
    - http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/
- Terminal for windows:
    - http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html
    - http://dosprompt.info/
    - http://www.computerhope.com/issues/chusedos.htm

## Installation instructions

- Install node.js and npm:
    - [windows, mac and linux](http://nodejs.org/download/).
    - [For mac using homebrew](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/). [WTF is homebrew?](http://brew.sh/).
    - How to check you installed them correctly?
        - Run: `$ which npm`
        - Run: `$ which node`
    - Make sure that you own the `.npm` file to avoid access errors
        - Run: `$ sudo chown -R <user>:staff ~/.npm`
        - This will change the owner of the `.npm` folder and all sub-folders to your user. Don't forget to replace `<user>` with your actual user name. **(For mac and linux only)**
- Install gulp globally:
    - Run: `$ npm install -g gulp`
    - Check: `$ which gulp`
- Install git:
    - Follow [installation instructions](http://git-scm.com/book/en/Getting-Started-Installing-Git).
        - For mac you should use homebrew to install git.
        - `$ brew install git`

## How does this project work?

The workflow for this project is as follows: In the top level directory there are several folders and files. The files are for configuration purposes only, so you don't need to concern yourself with them. The folders however, are important for you.

The folders `fonts` and `images` are used to store just that. These files don't change often and are used to store any images you might use in your web pages.

We also have the folders `html`, `sass`, and `js`. This is where out HTML, CSS and JavaScript files will go in respectively. Inside the `html` folder you will see an `index.html` file. This is the file that corresponds to the front page of the club website. Additionally there is a `profiles` folder. This is where the pages created by team members go. Each team member has one folder with their name so that you can keep your files neatly organized (Unlike those pesky neighbors!). The directories for CSS and JavaScript files have similar structures, where you have one folder with your name where you are able to store what ever you  want. Something worth noting is the presence of `libs` folders inside `sass` and `js`. This folder is used to store libraries. You see, there are some third party libraries that are commonly used. To avoid having one copy for every member folder we store common libraries here. So if you want to use a library check here first, maybe its already there!

Now that you are acquainted with the file structure lets discuss the workflow. In small projects it is very easy to work with HTML, CSS and JavaScript files. They are very straight forward and simple. For projects with multiple collaborators some extra measures have to be implemented, however. This will keep the project organized and un-cluttered. For this reason we have a couple of extra steps for working with this project.

We use a project builder called **Gulp JS**. This program allows us to run a few tasks that take all of our code and put it in a folder named `dist` (short for distribution). The tasks performed are mainly concerned with compiling Sass code, building HTML files and moving JavaScript files to the distribution folder. How you make this happen is explained below. This is important for you to consider because you will work on the source files located in the top level directory. When you want to see your work however, you need to compile the code and open the corresponding file inside of the `dist` folder. Another thing to keep in mind is that any paths that you place in your HTML files need to reflect the file structure of the `dist` folder, not the top level structure.

## Get up and running
- Download repo into a local directory.
    - Open the terminal and navigate to a directory where you want to store the repo (e.g. `$ cd projects/`).
    - Clone the repo by typing this command: `$ git clone https://github.com/elmerland/webdev.git`
    - This will create a new directory named `webdev` where the contents of this repo will be copied.
- Install dependencies
    - Using the terminal navigate into the git repo directory (e.g. `$ cd webdev/`).
    - The run `$ npm install` to install all project dependencies.
- Compiling
    - There are three commands you can run for compilation:
        - `$ gulp clean` - This will delete the entire `dist` directory.
        - `$ gulp compile` - This will compile all files and put them in the `dist` directory (if the directory doesn't exist, it will be created).
        - `$ gulp watch` - It will watch for any changes to files in the top level directory. If a change is detected it will recompile the changed file.
        - `$ gulp` - This command is a shortcut for `$ gulp clean compile watch`. It will delete all distribution files, compile them, and then watch for changes.
    - I recommend you running `$ gulp`. It will do everything you need in one pass. NOTE: If you create or delete a file please re-run `$ gulp`.

Now you should be able to compile files including HTML, Sass and JavaScript.

## Create your profile page

New members should create a new "profile" page. This profile page will then be linked in the main web site making it publicly available for everyone to see. To create a new profile page do the following:

- Create necessary folders
    - Create your own HTML folder: `html/profiles/<name>`
    - Create your own JavaScript folder: `js/<name>`
    - Create your own Sass folder: `sass/<name>`
- Copy sample profile
    - To help get you started we have created a sample profile page that you can use. This sample is stored at `html/profiles/sample_profile/sample_profile.html`. 
    - Be sure to also copy any resources used by the sample profile to your folders. This will make sure that any changes to the sample profile will not break you profile.
- Get started!
    - The sample profile is provided as a way to help new members get started. Please feel free to change it, hack it, or tear it up! There are no rules on what you can and cannot do (Except illegal stuff duh...) So get your creative juices flowing and create a page that will blow away recruiters.
    - We also have some challenges below if you want to do those.

You can see the sample profile [here](http://www.webdev.org.vt.edu/profiles/sample_profile/sample_profile.html). When you are done with your profile, create a new issue and we will add it to the live site.

## Challenges

The purpose of this project is to provide a sandbox environment to new developers that want to learn web development. One of the best ways to learn is by doing and so we encourage people to create their own profile page in this project. This profile page will have information about you. Hopefully in the process of creating this page you will learn all the basic tools and knowledge necessary for web development. Below are a few challenges that you can choose from to get you started (Items in bold are recommended for beginners).

- JavaScript challenges:
    - **Add a jQuery widget:** e.g. accordion, tabs, draggable items
    - Add animations: e.g. scroll animation, fade-in/out, mouse-over effects
- CSS challenges:
    - **Homegrown bootstrap:** Create basic styles for all HTML text tags e.g. paragraphs, titles, lists, 
    - Make responsive: Site works in mobile devices, e.g. phones, tables, desktop, extended desktop
    - Complex layout/grid: e.g. multiple columns/row
- Advanced:
    - Advance layouts: e.g. pinterest-style cards
    - Dynamic content: e.g. AJAX calls, graphs
    - One page app: e.g. Gmail style web page, citymapper style web page
