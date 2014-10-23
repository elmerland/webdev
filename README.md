# Web Development @ VT Club

This is the repo for Web Development @ VT club website.

## Installation instructions

- Install node.js and npm
    - [windows, mac and linux](http://nodejs.org/download/)
    - [For mac using homebrew](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/). [WTF is homebrew?](http://brew.sh/)
    - How to check you installed them correctly?
        - Run: `$ which npm`
        - Run: `$ which node`
- Install gulp globally
    - Run: `$ npm install -g gulp`
    - Check: `$ which gulp`
- Install git
    - Follow [installation instructions](http://git-scm.com/book/en/Getting-Started-Installing-Git)
        - For mac you should use homebrew to install git
        - `brew install git`

## Get up and running
- Download repo into a local directory.
    - `$ git clone https://github.com/elmerland/webdev.git`
- Install dependencies
    - `cd` into git repo directory
    - `$ npm install`
    - This will install gulpjs and some other plugins.
- Compile Sass
    - Open the terminal and navigate to the git repo directory
    - Run: `$ gulp`
    - This will listen to changes inside of the `sass` directory and compile them into normal 'css' files that the browser can understand.
- Inside of the repo create a new directory under the `profiles` directory. This new directory should have your name as the folder name (i.e. `profiles/my_name`). Inside this directory you can create all of your HTML files.
- Do the same for the `js`, and `sass` directories

## Challenges
- JavaScript challenges:
    - Add a jQuery widget, e.g. accordion, tabs, draggable items
    - Add animations, e.g. scroll animation, fade-in/out, mouse-over effects
- CSS challenges:
    - Make responsive. Site works in mobile devices, e.g. phones, tables, desktop, extended desktop
    - Complex layout/grid, e.g. multiple columns/row
    - Homegrown bootstrap. Create basic styles for all HTML text tags e.g. paragraphs, titles, lists, 
- Advanced:
    - Advance layouts e.g. pinterest-style cards
    - Dynamic content e.g. AJAX calls, graphs
    - One page app e.g. Gmail style webpage, citymapper style webpage
