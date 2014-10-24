# Web Development @ VT Club

Welcome to the repo for the Web Development Club website. This repository contains all the files and directories that make up our webpage. If you wish to contribute to this project you will find installation instructions below.

Web development usually consists only of text files (HTML, CSS, and JS) which do not need to be [compiled](http://en.wikipedia.org/wiki/Compiler). However, to better manage large projects or projects with multiple contributors it is often convinient to have certain management tools that make it easier to administer projects. This is why this repo requires certain software to be installed correctly. Some effort has been made to choose OS-agnostic software. Meaning that it should work in all three major OS platforms i.e. Linux, Macintosh (Apple), and Windows. A list of tools and the reason for their use is included in this README file. In addition, some instructions on how to install these tools are also provided. Because of the breadth of OS flavors and configurations is it impossible to provide a comphrehensive installation guide. And so, it is up to you (the user) to determine the best way to install the necessary tools. If you encouter a problem with installation feel free to create a new issue with a detailed description of your problem.

## Dependencies

This is a list of all the dependencies and tools used by this project
- [Git](http://git-scm.com/): A version control tool, it helps to keep track of changes.
- [Github](https://github.com/): A social front end to Git. It provied a friendly interface for users to interact with.
- [Gulp JS](http://gulpjs.com/): A project builder tool. Gulp allows for project configurations to be set in a way that is easy to distribute to all developers.
- [npm](https://www.npmjs.org/): A package manager that is required by Gulp
- [Node JS](http://nodejs.org/): A JavaScript engined that is required by npm
- [Sass](http://sass-lang.com/): A compiler for CSS (installed through npm automatically)

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
- Install gulp globally:
    - Run: `$ npm install -g gulp`
    - Check: `$ which gulp`
- Install git:
    - Follow [installation instructions](http://git-scm.com/book/en/Getting-Started-Installing-Git).
        - For mac you should use homebrew to install git.
        - `$ brew install git`

## Get up and running
- Download repo into a local directory.
    - Open the terminal and navigate to a directory where you want to store the repo (e.g. `$ cd projects/`).
    - Clone the repo by typing this command: `$ git clone https://github.com/elmerland/webdev.git`
    - This will create a new directory named `webdev` where the contents of this repo will be copied.
- Install dependencies
    - Using the terminal navigate into the git repo directory (e.g. `$ cd webdev/`).
    - The run `$ npm install` to install all project dependencies.
- Compile Sass
    - Open the terminal and navigate to the git repo directory
    - Run: `$ gulp`
    - This will listen to changes inside of the `sass` directory and compile them into normal 'css' files that the browser can understand.
- Inside of the repo create a new directory under the `profiles` directory. This new directory should have your name as the folder name (i.e. `profiles/my_name`). Inside this directory you can create all of your HTML files.
- Do the same for the `js`, and `sass` directories

## Challenges

The purpose of this project is to provide a sandbox environment to new developers that want to learn web development. One of the best ways to learn is by doing and so we encourage people to create their own profile page in this project. This profile page will have information about you. Hopefully in the process of creating this page you will learn all the basic tools and knowledge necessary for web development. Below are a few challenges that you can choose from to get you started (Items in bold are recomended for beginners).

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
    - One page app: e.g. Gmail style webpage, citymapper style webpage
