const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        })
    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        })
    }

    // Rest API of een micro service
    if(req.url === '/api/users'){
        const users = [
            { name: 'Matthijs Blauw', age: '21'},
            { name: 'Emilio Rosini', age: '20'}
        ]
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))    
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))