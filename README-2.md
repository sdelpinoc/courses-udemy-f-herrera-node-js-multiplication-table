# NODEJS

## Installations:

- Node(v16.15.1)
- Chrome
- VisualStudio
- Postman 
    - `sudo snap install postman` 
- Mongo Compass[no used]
- Git
- Github account

## Extra installations:
- [nodemon](https://www.npmjs.com/package/nodemon) 
    - `npm install -g nodemon`
    - `npm install --location=global nodemon`
- It is used to monitor the files and excute it if there was any change.

- [colors.js](https://www.npmjs.com/package/colors)

- [yargs](https://www.npmjs.com/package/yargs)

## Comands:
- `nodemon app` 
- To close nodemon: ctrl + c

## Others:
- If you run node app and in your file you have:
- `console.log(process.argv)`, it will show you(an array):
~~~
[
  '/home/sdelpinoc/.nvm/versions/node/v16.15.1/bin/node',
  '/home/sdelpinoc/programación/sdelpinoc/cursos/udemy/fernando-herrera/node-js/htdocs/node/03-node-bases/app'
]
~~~
- First element, is the route of node and the second, the route of your file
- And if you send a parameter like --base=9, it will show:
~~~
[
  '/home/sdelpinoc/.nvm/versions/node/v16.15.1/bin/node',
  '/home/sdelpinoc/programación/sdelpinoc/cursos/udemy/fernando-herrera/node-js/htdocs/node/03-node-bases/app',
  '--base=9'
]
~~~

- To install NPM:
    - `npm init`

- To install colors.js as a depedence:
    - `npm install colors`

- To install nodemon as a development dependence:
    - `npm install nodemon --save-dev`

- To uninstall nodemon:
    - `npm uninstall nodemon`

- To install a specific version of colors module:
    - `npm install colors@1.0.0`

- To update dependences:
    - `npm update`

- To install yargs:
    - `npm install yargs`