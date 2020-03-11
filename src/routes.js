import { Router } from 'express'
import AuthController from './Auth/AuthController'
import UserController from './User/UserController'
import { Auth, FormValidation } from './middlewares'
import UserValidator from './User/UserValidator'

const apiRouter = Router()

apiRouter.post('/session', AuthController.signIn)
apiRouter.post('/users', UserValidator.signUp(), FormValidation.catchErrors, UserController.signUp)

apiRouter.get('/session', Auth.check, AuthController.show)

export default apiRouter
