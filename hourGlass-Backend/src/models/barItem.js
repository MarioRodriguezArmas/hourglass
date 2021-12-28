const mongoose = require('mongoose')

const barItemSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

const barItem = mongoose.model('bars', barItemSchema)

module.exports = { barItem }
