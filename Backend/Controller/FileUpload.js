const asyncHandler = require('express-async-handler')
const XLSX = require('xlsx')
const path = require('path')
const Constants = require('../Constants/Constants')
const FileUploadModel = require('../Models/FileUploadModel')
const AirPortDetailsModel = require('../Models/AirPortDetailsModel')

module.exports.FileUpload = asyncHandler(async (req, res) => {
    const filename = req.files.excel.name;
    const file = req.files.excel;
    let uploadPath = path.join(__dirname, '../public/flightdetails') + filename;
    file.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
        }
        let workbook = XLSX.readFile(uploadPath)
        let sheet_namelist = workbook.SheetNames;
        let x = 0
        sheet_namelist.forEach(element => {
            let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
            FileUploadModel.insertMany(xlData, (err, data) => {
                if (err) {
                    console.log(err.message.replace(/Error:/gi, '').trim());
                }
            })
            x++
        });
    });
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})

module.exports.AirportDataUpload = asyncHandler(async (req, res) => {
    const filename = req.files.fileupload.name;
    const file = req.files.fileupload
    let uploadPath = path.join(__dirname, '../public/AirportDetails/') + filename
    file.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
        }
        let workbook = XLSX.readFile(uploadPath)
        let sheet_namelist = workbook.SheetNames
        let x = 0
        sheet_namelist.forEach(element => {
            let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]])
            AirPortDetailsModel.insertMany(xlData, (err, data) => {
                if (err) {
                    console.log(err.message.replace(/Error:/gi, '').trim());
                }
            })
            x++
        });
    })
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})