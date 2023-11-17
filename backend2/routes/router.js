const express = require('express')
const router = express.Router()
const {createProfile, getUserInfo} = require('../controller/controller')

router.route('/').get(getUserInfo)
router.route('/').post(createProfile)

module.exports = router