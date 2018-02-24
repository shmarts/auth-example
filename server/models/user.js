import mongoose from 'mongoose'
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  email: String,
  password: String
}))
