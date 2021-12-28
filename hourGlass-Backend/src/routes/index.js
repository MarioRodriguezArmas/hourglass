const express = require('express')
const router = express.Router()
const { controller } = require('../controllers')

router.post('/carousel-activities', controller.postCarouselActivitiesItem)
router.get('/carousel-activities', controller.getAllCarouselActivitiesItem)
router.put('/carousel-activities/:id', controller.putOneCarouselActivitiesItem)

router.post('/carousel-staff', controller.postCarouselStafflItem)
router.get('/carousel-staff', controller.getAllCarouselStafflItem)
router.put('/carousel-staff/:id', controller.putOneCarouselStaffItem)

router.post('/dinning', controller.postDinningItem)
router.get('/dinning', controller.getAllDinningItem)
router.put('/dinning/:id', controller.putOneDinningItem)

router.post('/breakfast', controller.postBreakfastItem)
router.get('/breakfast', controller.getAllBreakfastItem)
router.put('/breakfast/:id', controller.putOneBreakfastItem)

router.post('/bars', controller.postBarItem)
router.get('/bars', controller.getAllBarItem)
router.put('/bars/:id', controller.putOneBarItem)

module.exports = router
