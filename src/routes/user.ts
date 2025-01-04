import express from 'express'
import prisma from '../lib/prisma'
import { syncUserToPermit } from '../lib/userSync'

const router = express.Router()

router.post('/users', async (req, res) => {
  const { email } = req.body
  
  try {
    // Create user in database
    const user = await prisma.user.create({
      data: { email }
    })

    // Sync to Permit
    await syncUserToPermit(user.id, email)

    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' })
  }
})

export default router
