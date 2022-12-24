const { FileUpload } = require('../Controller/FileUpload');
const path = require('path')
const XLSX = require('xlsx')
const multer = require('multer')

//multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage })

const router = require('express').Router();

router.route('/').post(upload.single('excel') ,FileUpload)

module.exports = router