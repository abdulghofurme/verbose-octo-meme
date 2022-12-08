import { Maintenance, RemoteConfigInterface } from "./configInterface"

class RemoteConfigEntity {
  config: RemoteConfigInterface

  constructor(config: RemoteConfigInterface) {
    this.config = config
  }

  get maintenanceWeb(): Maintenance {
    return this.config.maintenance_web
  }
}

export default RemoteConfigEntity
