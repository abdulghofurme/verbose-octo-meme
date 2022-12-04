import { BASE_IMAGE_URL } from "@config/env"

export type downloadsItemType = {
  url: string
  imageURL: string
}

const appsConfig = {
  downloads: {
    ios: {
      url: "https://itunes.apple.com/id/app/bareksa/id1316876694",
      imageURL: `${BASE_IMAGE_URL}/bareksa/img/logo/badge_app-store.png`,
    },
    android: {
      url: "https://play.google.com/store/apps/details?id=com.bareksa.app",
      imageURL: `${BASE_IMAGE_URL}/bareksa/img/logo/badge_google-play.png`,
    },
  },
}

export default appsConfig
