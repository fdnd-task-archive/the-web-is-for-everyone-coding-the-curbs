const url = require('url')

const myUrl = new URL('http://mybsite.com/helo.html?id=100&status=active')

// Serialize URL
console.log(myUrl.href)
console.log(myUrl.toString())
// http://mybsite.com/helo.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host)
// Hostname (does net get port)
console.log(myUrl.hostname)
// mybsite.com

// Pathname
console.log(myUrl.pathname)
// /helo.html

// Serialized query
console.log(myUrl.search)
// ?id=100&status=active

// Params object
console.log(myUrl.searchParams)
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
// id: 100
// status: active
// abc: 123

