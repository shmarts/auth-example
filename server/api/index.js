import { Router } from 'express'

// Import other route files here
import user from './user'
import checkToken from '../middleware/checkToken'

const router = Router()

// Import routes from other files and .use them here
router.use(user)
router.use('/protected', checkToken)

export default router
