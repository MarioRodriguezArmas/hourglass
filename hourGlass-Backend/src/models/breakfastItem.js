const mongoose = require('mongoose')

const breakfastItemSchema = new mongoose.Schema({
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
  },
  type: {
    type: String,
    required: true
  },
  members: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

const breakfastItem = mongoose.model('breakfasts', breakfastItemSchema)

module.exports = { breakfastItem }
