const mongoose = require('mongoose')

const carouselStaffSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },
  phrase: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

const carouselStaff = mongoose.model('carousel-staffs', carouselStaffSchema)

module.exports = { carouselStaff }
