let connect = require('connect')
let app = connect()

let helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
}
app.use(helloWorld)

app.listen(process.env.PORT, process.env.IP)