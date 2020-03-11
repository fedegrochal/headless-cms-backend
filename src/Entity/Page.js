import mongoose from 'mongoose'

const pageSchema = new mongoose.Schema({
  uri: {
    type: String
  },
  rootComponent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Component'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Page = mongoose.model('Page', pageSchema)
export default Page
