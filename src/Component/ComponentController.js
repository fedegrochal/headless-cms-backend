import ComponentService from './ComponentService'
import ResponseUtil from '../Common/Util/ResponseUtil'

class ComponentController {

  static async create (req, res) {
    try {
      const service = new ComponentService()
      const component = await service.create(req.body.name, req.body.schema, req.user)
      ResponseUtil.success(res, component)
    }catch(e) {
      ResponseUtil.error(res, e)
    }
  }
}

export default ComponentController
