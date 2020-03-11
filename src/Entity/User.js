import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})
userSchema.statics.findByLogin = async function (email, password) {
  return await this.findOne({
    email: email,
    password: password
  })
}
userSchema.statics.findById = async function (id) {
  return await this.findOne({
    _id: id
  })
}
userSchema.statics.findByEmail = async function (email) {
  return await this.findOne({
    email: email
  })
}
userSchema.statics.findAll = async function () {
  return await this.find({})
}

const User = mongoose.model('User', userSchema)
export default User
