require('dotenv').config()
const app = require('express')()
const cors = require('cors');
const bodyparser = require('body-parser')
const connectDB = require('./db');

const router = require('./routes')

const PORT = process.env.PORT || 5555;

connectDB()

app.use(cors())

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json({extended: true}))
app.use(router)


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
})



///kgjhg