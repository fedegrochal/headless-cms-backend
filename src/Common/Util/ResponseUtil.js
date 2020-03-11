import InvalidArgError from '../Error/InvalidArgError'

class ResponseUtil {

  static success (res, data) {
    return res.json({success: true, data: data})
  }

  static formError (res, errors) {
    return res.status(400).json({success: false, errors: errors.array()})
  }

  static error (res, error) {
    let message = 'Internal server error'
    if (error instanceof InvalidArgError) {
      message = error.message
    }
    return res.status(500).json({success: false, error: message})
  }
}

export default ResponseUtil
