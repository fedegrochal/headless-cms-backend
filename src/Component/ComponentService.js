import Component from '../Entity/Component'

class ComponentService {

  async create(name, schema, owner) {
    let component = new Component({
      name: name,
      schemaConfig: schema,
      owner: owner.id
    })
    await component.save()
    return component
  }
}

export default ComponentService
