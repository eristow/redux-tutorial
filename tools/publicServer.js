const express = require('express')
const path = require('path')
const open = require('open')
const compression = require('compression')
const favicon = require('serve-favicon')

/*eslint-disable no-console */

const port = process.env.PORT || 8080
const app = express()

app.use(compression())
app.use(express.static('public'))
// app.use(favicon(path.json(__dirname, 'assets', 'public', 'favicon.ico')))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname), '../public/index.html')
})

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    } else {
        open(`http://localhost:${port}`)
    }
})
