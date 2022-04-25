const fs = require('fs')
const path = require('path')

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err){
    if(err) throw err
    console.log('File renamed...')
})
// File renamed...