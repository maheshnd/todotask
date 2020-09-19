const mongoose = require('mongoose');

const toSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
});

module.exports = mongoose.model('TodoModel', toSchema);
