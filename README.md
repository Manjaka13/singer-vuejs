# Singer
Singer Chantepie's website

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Fix leaflet error

Sometimes, somehow the leaflet's dependency is not install. Run the following command line to fix this : 

```
npm i leaflet
```

### Sass loader issues

# /!\ if you work with vue@2.6.12, it seems sass-loader@11.0.0 doesn't work
# So, in terminal:

```
yarn add node-sass sass-loader@10.1.1
```

