import mongoose from 'mongoose'

const componentSchema = new mongoose.Schema({
  uri: {
    type: String
  },
  schemaConfig: {
    type: Object
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Component = mongoose.model('Component', componentSchema)
export default Component
