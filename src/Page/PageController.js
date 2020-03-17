import PageService from './PageService'
import ResponseUtil from '../Common/Util/ResponseUtil'

class PageController {

  static async create (req, res) {
    try {
      const service = new PageService()
      const page = await service.create(req.body.uri, req.user)
      ResponseUtil.success(res, page)
    }catch(e) {
      ResponseUtil.error(res, e)
    }
  }
}

export default PageController
