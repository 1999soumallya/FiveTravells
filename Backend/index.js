const express = require('express')
const constants = require('./Constants/Constants')
const { ConnectMongoose } = require('./Config/Connection')
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')

const app = express()

ConnectMongoose()

app.use(cors())
app.use(express.json())
app.use(fileupload({ createParentPath: true }))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("This is my node Server")
})

app.use('/api/auth', require('./Router/CommonRoute'))
app.use('/api/fileupload', require('./Router/FileUploadRouter'))
app.use('/api/admin', require('./Router/AdminRoute'))

app.listen(constants.config.PORT, () => {
    console.log(`My node Server Run On ${constants.config.PORT}`);
})