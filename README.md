# Web Development @ VT Club

This is the repo for Web Development @ VT club website.

## Installation instructions

- Install node.js and npm
    - [windows, mac and linux](http://nodejs.org/download/)
    - [For mac using homebrew](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/). [WTF is homebrew?](http://brew.sh/)
    - How to check you installed them correctly?
        - Run: `$ which npm`
        - Run: `$ which node`
- Install git and clone repo
    - Follow [installation instructions](http://git-scm.com/book/en/Getting-Started-Installing-Git)
        - For mac you should use homebrew to install git
        - `brew install git`
    - Clone git repo to your computer
      - `git clone https://github.com/elmerland/webdev.git`
- Install dependencies
    - `cd` into git repo directory
    - `$ npm install`
    - This will install gulpjs and some other plugins.
- Compile Sass
    - Run: `gulp`
    - This will listen to changes inside of the `sass` directory and compile any new files.