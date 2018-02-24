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
  user.save((err, data) => {
    if (err) return res.send(err)
    res.json({ error: false })
  })
})

// Login route
router.post('/login', (req, res) => {
  let data = {
    email: req.body.email,
    password: req.body.password
  }
  User.findOne(data).lean().exec((err, user) => {
    if (err) return res.send(err)
    if (!user) return res.status(404).json({ 'message': 'User not found.' })

    // let token = jwt.sign(user, process.env.SECRET, { expiresIn: 1440 })
    // res.cookie('cookie', 'this is my cookie', { maxAge: 900000 })

    let oldCookie = req.cookies.test
    let newCookie = (oldCookie | 0) + 1

    res.status(200)
      .cookie('test', newCookie, { maxAge: 9000000, httpOnly: false })
      .json({ newCookie, oldCookie, reqCookie: req.cookies.test })

    console.log('Login successful')
  })
})

router.get('/', (req, res) => {
  res.cookie('cooe', 'this is my cookie', { maxAge: 900000 })
    .json({ b: 'b' })
})

export default router
