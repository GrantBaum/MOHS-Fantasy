const express = require('express')
const app = express()
const nodemon = require('nodemon')
const port = 9999

app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render('/hs-fantasy/main', { title: 'Home',})
})

app.listen(port, () => {
  console.log(`HS Fantasy is listening on http://localhost:${port}`)
})
