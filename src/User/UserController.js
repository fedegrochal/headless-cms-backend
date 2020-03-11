import UserService from './UserService'
import ResponseUtil from '../Common/Util/ResponseUtil'

class UserController {

  static async signUp (req, res) {
    const service = new UserService()
    const {name, email, password} = req.body
    try {
      const user = await service.signUp(name, email, password)
      return ResponseUtil.success(res, {name: user.name, email: user.email})
    } catch (e) {
      return ResponseUtil.error(res, e)
    }
  }
}

export default UserController
