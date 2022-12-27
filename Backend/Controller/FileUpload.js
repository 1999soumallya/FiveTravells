const asyncHandler = require('express-async-handler')
const XLSX = require('xlsx')
const path = require('path')
const Constants = require('../Constants/Constants')
const FileUploadModel = require('../Models/FileUploadModel')
const AirPortDetailsModel = require('../Models/AirPortDetailsModel')
const { ConnectMysql } = require('../Config/Connection')

const connection = ConnectMysql()

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
    connection.query("CREATE TABLE IF NOT EXISTS`AirportDetails`(`id` int NOT NULL AUTO_INCREMENT, `City_Name` varchar(200) NOT NULL, Airport_Code varchar(200) NOT NULL,Airport_Name varchar(200) NOT NULL,Country_Name varchar(200) NOT NULL,Country_Abbrev varchar(200) NOT NULL,World_Area_Code int NOT NULL, PRIMARY KEY(`id`)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci", (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).send(err)
        }
    })
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
            xlData.forEach((xlData) => {
                connection.query(`INSERT INTO AirportDetails (City_Name, Airport_Code, Airport_Name, Country_Name, Country_Abbrev, World_Area_Code) VALUES ("${xlData.City_Name}", "${xlData.Airport_Code}", "${xlData.Airport_Name}", "${xlData.Country_Name}", "${xlData.Country_Abbrev}", ${xlData.World_Area_Code})`, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
            x++
        });
    })
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})