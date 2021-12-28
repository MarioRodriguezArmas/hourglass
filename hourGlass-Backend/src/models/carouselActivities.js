const mongoose = require('mongoose')

const carouselActivitiesSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },

  hour: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

const carouselActivities = mongoose.model('carousel-activites', carouselActivitiesSchema)

module.exports = { carouselActivities }
