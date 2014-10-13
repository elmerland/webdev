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

## Get up and running
- Download repo into a local directory.
    - `$ git clone https://github.com/elmerland/webdev.git`
- Inside of the repo create a new directory under the `profiles` directory. This new directory should have your name as the folder name (i.e. `profiles/my_name`).
- Now copy the contents of `profile/base-profile` into the directory with your name.
- Rename the `base.html` file with your name (i.e. `my_name.html`).
- Open terminal and cd into repo directory.
- Run `$ gulp watch`. This will start watching the sass directory for changes to sass files and  automatically compile then into css files.
- 