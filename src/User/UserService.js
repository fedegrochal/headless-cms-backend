import User from '../Entity/User'

const bcrypt = require('bcryptjs')

class UserService {

  async signUp (name, email, password) {

    const hashed = await bcrypt.hash(password, 5)

    let user = new User({
      name: name,
      email: email,
      password: hashed
    })
    await user.save()
    return user
  }
}

export default UserService
