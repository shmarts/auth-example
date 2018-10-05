import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import api from './api'
// import jwt from 'jsonwebtoken'
// import User from '/models/user'

const app = express()
if (process.env.SECRET === undefined) process.env.SECRET = 'Q8r83KHW,"@YJvJJml:I3D{guonu`t'

// Parse post routes as json
app.use(bodyParser.json())

// Use cors
app.use(cors())

// Connect to mongo db
mongoose.connect('mongodb://localhost/auth')

// Import API routes
app.use('/api', api)

// Listen on the server
app.listen(4000, () => {
  console.log('Server running on port 4000')
})
