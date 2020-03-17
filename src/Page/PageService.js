import Page from '../Entity/Page'

class PageService {

  async create(uri, owner) {
    let page = new Page({
      uri: uri,
      owner: owner.id
    })
    await page.save()
    return page
  }
}

export default PageService
