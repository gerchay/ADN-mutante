const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors({ origin: true }))


app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(3000, () => console.log('SERVER PORT 3000'))