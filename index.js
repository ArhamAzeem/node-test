const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connect = require('./config/db')
const { globalLimiter } = require('./middlewares/rateLimiter')

dotenv.config()
connect()

const app = express()
app.use(cors())

app.use(express.json())
app.use(globalLimiter)

app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/monitors', require('./routes/monitorRoutes'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))