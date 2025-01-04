import express from 'express'
import dotenv from 'dotenv'
import assetRouter from './routes/asset'
import userRouter from './routes/user'

dotenv.config()

const app = express()
app.use(express.json())

// Routes
app.use('/api', assetRouter)
app.use('/api', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
