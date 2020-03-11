import AuthService from './Auth/AuthService'
import { validationResult } from 'express-validator'
import ResponseUtil from './Common/Util/ResponseUtil'

class Auth {
  static async check (req, res, next) {
    const token = req.header('x-auth-token')
    const service = new AuthService()
    try {
      const response = await service.check(token, process.env.SECRET)
      req.user = response.user
      next()
    } catch (e) {
      console.log(e)
      res.status(400).send('Invalid JWT.')
    }
  }
}

class FormValidation {
  static catchErrors (req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return ResponseUtil.formError(res, errors)
    }
    return next()
  }
}

export { Auth, FormValidation }
