const express = require('express'),
  morgan = require('morgan')
  cors = require('cors');

require('./dba/database');

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(morgan('dev'))

const mutant = require('./routes/mutant');
app.use('/challenge', mutant)

app.listen(3000, () => console.log('SERVER PORT 3000'))