const asyncHandler = require('express-async-handler')

module.exports.FileUpload = asyncHandler(async (req, res) => {
    console.log(req.file.path);
})