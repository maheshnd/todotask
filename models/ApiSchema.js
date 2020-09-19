const mongoose = require('mongoose');
const apiSchema = new mongoose.Schema({
  apiPath: {
    type: String,
  },
  flag: Boolean,
});

module.exports = mongoose.model('ApiSchema', apiSchema);
