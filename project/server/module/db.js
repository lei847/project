const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tea:123456ljy@cluster0.kayno.mongodb.net/project2025-03")
.then(() => console.log('connected to db'))
.catch(err => console.log('could not connect to db', err));

module.exports = mongoose;