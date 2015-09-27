# Letterforms In CSS

## About
This project is an experiment in creating letterforms using only HTML and CSS – no imported font files.

## Setup

### Installing NodeJS
You will need to have [NodeJS](https://nodejs.org/en/) installed. I recommend using [NVM](https://github.com/creationix/nvm)  to setup node, rather than the nodejs install (this way, you can avoid typing `sudo`):

1. `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.27.0/install.sh | bash` will install NVM (node version manager), which will allow you to download and install different versions of NodeJS and iojs.

2. `nvm install stable` will install the latest stable release of NodeJS.
3. `nvm alias default stable` will set this stable release to the default.

Now, if you type: `npm --version` you should see a number like `2.14.2` (or later).

### Development

1. `git clone https://github.com/geekydatamonkey/letterforms-in-css.git`
2. `cd letterforms-in-css`
3. `npm install`
4. `npm start`

You can view project on [http://localhost:8000]. It will live reload.

### Build for production

1. To build: `npm run dist`
2. The `dist` folder now contains a production-ready version. Deploy to server as you wish.
3. To locally serve the production build: `npm run serve:dist`

### Publish to GH pages

1. `npm install gh-pages -g`
2. `npm run deploy`

## Credits

- Jasio Stefanski: CSS, HTML, Typography
- James Johnson: JS

## Some Tech Stack Stuff

- [Yeoman](http://yeoman.io/) with [Generator-React-Webpack](https://github.com/newtriks/generator-react-webpack) for kicking off the project.
- [ReactJS](https://github.com/reactjs)
- [Webpack](https://webpack.github.io/)

