const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('message')
})

app.listen(port, () => {
    console.log(`Port start at http://localhost:${port}`)
})