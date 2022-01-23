const mongoose = require('mongoose');
const toJSON = require('./plugins/toJson');

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

companySchema.plugin(toJSON);

const Company = mongoose.model('User', companySchema);

module.exports = Company;
