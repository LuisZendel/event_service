const express = require('express')
const { getData, postData, deleteData } = require('../controller/event')
const router = express.Router()

router.get('/data', (req,res) => {
    getData({req,res})
})
router.post('/data', (req,res) => {
    postData(req,res)
})

router.post('/data/delete', (req,res) => {
    deleteData(req,res)
})

module.exports = router