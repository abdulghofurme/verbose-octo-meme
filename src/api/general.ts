import { CONFIG_URL } from "@config/env"
import RemoteConfigEntity from "@entity/config"

/* eslint-disable import/no-anonymous-default-export */
export default {
  getRemoteConfig: async () => {
    if (!CONFIG_URL) return null
    let result: RemoteConfigEntity | null
    try {
      const configData = await fetch(CONFIG_URL).then((res) => res.json())
      // configData.maintenance_web.status = true

      result = new RemoteConfigEntity(configData)
    } catch (error) {
      console.log(error)
      result = null
    }

    return result
  },
}
