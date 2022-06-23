const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/challenge')
  .then(db => console.log('DB is conencted to ', db.connection.host))
  .catch(err => console.error(err));