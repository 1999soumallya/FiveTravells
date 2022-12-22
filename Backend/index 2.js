const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/',(req, res) => {
    res.send('My Node Server is Ready')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Is running On ${process.env.PORT}`);
})