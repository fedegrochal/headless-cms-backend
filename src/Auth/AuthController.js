import AuthService from './AuthService'
import ResponseUtil from '../Common/Util/ResponseUtil'

class AuthController {
  static show (req, res) {
    ResponseUtil.success(res, req.user)
  }

  static async signIn (req, res) {
    const {email, password} = req.body
    const service = new AuthService()

    try {
      const response = await service.signIn(email, password, process.env.SECRET)
      return ResponseUtil.success(res, response)
    } catch (e) {
      return ResponseUtil.error(res, e)
    }
  }
}

export default AuthController
