import express from 'express'

import cors from 'cors'
import 'dotenv/config'

import apiRouter from './routes'
import mongoose from 'mongoose'
import Page from './Entity/Page'
import User from './Entity/User'
import Component from './Entity/Component'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', apiRouter)

app.use(function (err, req, res, next) {
  console.error(err)
})

process.on('unhandledRejection', function (err) { throw err })

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
}
mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`)
  setTimeout(connectDb, 10000)
})

connectDb().then(async () => {

  await Promise.all([User.deleteMany({}), Page.deleteMany({}), Component.deleteMany({})])
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  )
})
