import express from 'express'

const router = express.Router()

router.post('/register', (req, res) => {
    const user = req.body

    res.status(201).json(user)
})

// router.post('/login', (req, res) => {
    
// })

export default router 