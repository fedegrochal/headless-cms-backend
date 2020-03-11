class InvalidArgError extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, InvalidArgError)
  }
}

export default InvalidArgError
