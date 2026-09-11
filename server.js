import express from 'express'
import 'dotenv/config'

import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import authRoutes from "./routes/authRoutes.js"
const app = express()



const PORT = process.env.Port || 5000

app.use(express.json())


app.use('/users', userRoutes)

app.use('/products', productRoutes)


app.use('/auth', authRoutes)

const Server = async () => {

    try {

        await connectDB()


        app.listen(PORT, () => {

            console.log('MongoDB connected successfully')

            console.log('Server started successfully')

            console.log(`http://localhost:${PORT}`)

        })

    }
    catch (error) {

        console.error('Server startup failed:', error.message)

        process.exit(1)

    }

}


Server()