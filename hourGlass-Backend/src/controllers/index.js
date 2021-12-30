const { carouselActivities } = require('../models/carouselActivities')
const { carouselStaff } = require('../models/carouselStaff')
const { dinningItem } = require('../models/dinningItem')
const { breakfastItem } = require('../models/breakfastItem')
const { barItem } = require('../models/barItem')
const { user } = require('../models/user')

const controller = {
  // CAROUSEL ACTIVITIES
  postCarouselActivitiesItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await carouselActivities.create(req.body)
      res.json({
        msg: 'Post Carousel Item',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getAllCarouselActivitiesItem: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await carouselActivities.find(req.body)
      res.json({
        msg: 'All Users',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneCarouselActivitiesItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await carouselActivities.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  // CAROUSEL STAFF
  postCarouselStafflItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await carouselStaff.create(req.body)
      res.json({
        msg: 'Post Carousel Item',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getAllCarouselStafflItem: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await carouselStaff.find(req.body)
      res.json({
        msg: 'All Users',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneCarouselStaffItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await carouselStaff.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  // DINNING
  postDinningItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await dinningItem.create(req.body)
      res.json({
        msg: 'Post Dinning Item',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getAllDinningItem: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await dinningItem.find(req.body)
      res.json({
        msg: 'All Restaurants',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneDinningItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await dinningItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  // BREAKFAST
  postBreakfastItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await breakfastItem.create(req.body)
      res.json({
        msg: 'Post Breakfast Item',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getAllBreakfastItem: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await breakfastItem.find(req.body)
      res.json({
        msg: 'All Restaurants',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneBreakfastItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await breakfastItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  // BARS
  postBarItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await barItem.create(req.body)
      res.json({
        msg: 'Post Bar Item',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getAllBarItem: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await barItem.find(req.body)
      res.json({
        msg: 'All Bars',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneBarItem: async (req, res) => {
    try {
      console.log(req.body)
      const response = await barItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  // USERS
  postUser: async (req, res) => {
    try {
      console.log(req.body)
      const response = await user.create(req.body)
      res.json({
        msg: 'Post User',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  getUsers: async (req, res) => {
    try {
      console.log(req.body)
      const usuarios = await user.find(req.body)
      res.json({
        msg: 'All Users',
        data: usuarios
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  },
  putOneUser: async (req, res) => {
    try {
      console.log(req.body)
      const response = await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({
        msg: 'Updated',
        data: response
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg: 'ERROR',
        data: null
      })
    }
  }
}

module.exports = { controller }
