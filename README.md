Scratch Combos Web Client
=====================

### Usage

```
npm install
npm start
open http://localhost:3000
npm test
```

Maybe you need to add .babelrc per hand if it is not copied correctly.


### Gulp Tasks

Use gulp for bundling

install the gulp cli globally (as root)

```
$ npm install gulp -g
```

Run gulp to build the bundle.js amd base.css on file save

```
$ gulp
```

Run gulp deploy to build and minify the bundle.js and base.css to /dist/min/bundle.js and base.css

```
$ gulp deploy
```

Run gulp webpack to build the uncompressed bundle to /dist/bundle.js

```
$ gulp webpack
```

Run gulp sass to build the uncompressed base.css to /dist/css/base.css

```
$ gulp sass
```
