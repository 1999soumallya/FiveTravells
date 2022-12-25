const asyncHandler = require('express-async-handler')
const XLSX = require('xlsx')
const path = require('path')
const FileUploadModel = require('../Models/FileUploadModel')
const Constants = require('../Constants/Constants')


module.exports.FileUpload = asyncHandler(async (req, res) => {
    let workbook = await XLSX.readFile(req.file.path)
    let sheet_namelist = workbook.SheetNames;
    let x = 0
    let ErrorMessage = ""
    sheet_namelist.forEach(element => {
        let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
        FileUploadModel.insertMany(xlData, (err, data) => {
            if (err) {
                ErrorMessage = err.message.replace(/Error:/gi, '').trim()
                console.log(err.message.replace(/Error:/gi, '').trim());
            }
        })
        x++
    });
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})