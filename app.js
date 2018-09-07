const express = require('express')
const app = express()

app.use(express.static('public'))

// router
app.get('/', (req, res) => res.send('demo start'))

app.listen(5000, () => console.log('App listening on http://localhost:5000 ...'))