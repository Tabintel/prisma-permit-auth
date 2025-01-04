import express from 'express'
import prisma from '../lib/prisma'

const router = express.Router()

router.post('/assets', async (req, res) => {
  const { name, description, category, ownerId } = req.body
  
  try {
    const asset = await prisma.resource.create({
      data: {
        name,
        description,
        category,
        ownerId
      }
    })
    res.json(asset)
  } catch (err) {
    const error = err as Error
    if (error.message === 'Unauthorized') {
      res.status(403).json({ error: 'Permission denied' })
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

router.get('/assets', async (req, res) => {
  const { category } = req.query
  
  try {
    const assets = await prisma.resource.findMany({
      where: { 
        category: category as string 
      }
    })
    res.json(assets)
  } catch (err) {
    const error = err as Error
    if (error.message === 'Unauthorized') {
      res.status(403).json({ error: 'Permission denied' })
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

router.put('/assets/:id', async (req, res) => {
  const { id } = req.params
  const { name, description, category, ownerId } = req.body
  
  try {
    const asset = await prisma.resource.update({
      where: { id },
      data: {
        name,
        description,
        category,
        ownerId
      }
    })
    res.json(asset)
  } catch (err) {
    const error = err as Error
    if (error.message === 'Unauthorized') {
      res.status(403).json({ error: 'Permission denied' })
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

router.delete('/assets/:id', async (req, res) => {
  const { id } = req.params
  
  try {
    await prisma.resource.delete({
      where: { id }
    })
    res.json({ message: 'Asset deleted successfully' })
  } catch (err) {
    const error = err as Error
    if (error.message === 'Unauthorized') {
      res.status(403).json({ error: 'Permission denied' })
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

export default router