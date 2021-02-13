import express, { Request, Response, NextHandler } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// Controllers (route handlers)
import * as homeController from './controllers/home'
import * as apiController from './controllers/api'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Set proper CORS Headers
app.use(cors())

// BODYPARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Middlewares
 */
app.use((req: Request, res: Response, next: NextHandler) => {
  res.locals.message = 'Hello World'
  next()
})

/**
 * Primary app routes.
 */
app.get('/', homeController.index)

/**
 * API routes.
 */
app.post('/api/:input', apiController.inputController)

export default app
