import User from '../Entity/User'
import InvalidArgError from '../Common/Error/InvalidArgError'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class AuthService {

  async check (token, secret) {
    if (!token) {
      throw new InvalidArgError('Token not provided')
    }

    try {
      const decoded = jwt.verify(token, secret)
      let user = await User.findByEmail(decoded.email)
      if (!user) {
        throw new InvalidArgError('No user')
      }
      return {user: user}
    } catch (e) {
      throw InvalidArgError('Invalid token')
    }
  }

  async signIn (email, password, secret) {
    let user = await User.findByEmail(email)
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new InvalidArgError('Invalid user or password')
    }
    const token = jwt.sign({email}, secret, {
      algorithm: 'HS256',
      expiresIn: 15 * 60
    })
    return {token: token}
  }
}

export default AuthService
