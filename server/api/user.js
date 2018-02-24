import { Router } from 'express'
import User from '../models/user'
// import jwt from 'jsonwebtoken'

const router = Router()

// Register route
router.post('/register', (req, res) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password
  })
  console.log('test')
  user.save((err, data) => {
    if (err) return res.send(err)
    res.json({ error: false })
  })
})

// Login route
// router.post('/login', (req, res) => {
//   let data = {
//     email: req.body.email,
//     password: req.body.password
//   }
//   console.log(data)
//   User.findOne(data).lean().exec((err, user) => {
//     if (err) return res.send(err)
//     if (!user) return res.status(404).json({ 'message': 'User not found.' })
//     let token = jwt.sign(user, process.env.SECRET, { expiresIn: 1440 })
//     res.json({ error: false, token })
//     // res.cookie('token', token, { maxAge: 900000, httpOnly: true })
//     console.log(token)
//   })
// })

export default router
