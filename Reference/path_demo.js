const path = require('path')

// Base file name
console.log(path.basename(__filename))
//path_demo.js

// Directory name
console.log(path.dirname(__filename))
///Users/matthijsblauw/Documents/1. School/Blok 1/Sprint 9/the-web-is-for-everyone-coding-the-curbs/Reference

// File extention
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
/*{
    root: '/',
    dir: '/Users/matthijsblauw/Documents/1. School/Blok 1/Sprint 9/the-web-is-for-everyone-coding-the-curbs/Reference',
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
}    */

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))
// ../the-web-is-for-everyone-coding-the-curbs/Reference/test/hello.html

