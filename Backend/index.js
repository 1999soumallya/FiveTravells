const express = require('express')
const constants = require('./Constants/Constants')
const { ConnectMongoose } = require('./Config/Connection')
const cors = require('cors')

const app = express()

ConnectMongoose()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is my node Server")
})

app.use('/api/auth', require('./Router/CommonRoute'))

app.listen(constants.config.PORT, () => {
    console.log(`My node Server Run On ${constants.config.PORT}`);
})