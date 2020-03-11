import { body, check } from 'express-validator/src/index'
import User from '../Entity/User'

class UserValidator {

  static signUp () {
    return [
      check('name').isString().trim().isLength({min: 2, max: 50}),
      check('email').isEmail().trim(),
      check('password').isString().trim().isLength({min: 5, max: 15}),
      body('email').custom(async value => {
        const user = await User.findByEmail(value)
        if (user) {
          return Promise.reject('E-mail already in use')
        }
        return true
      })
    ]
  }
}

export default UserValidator
