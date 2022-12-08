import general from "@api/general"
import { BASE_URL } from "@config/env"
import log from "@lib/log"
import { ServerQueryClient } from "@lib/queryClient"
import { NextRequest, NextResponse, userAgent } from "next/server"

export async function middleware(request: NextRequest) {
  const url = request.nextUrl
  // log.fgGreen("=======> ", url.pathname)

  if (/_next/i.test(url.pathname)) return NextResponse.next()

  log.bgGreen("=======> WOOOO", url.pathname)
  const userAgentParsed = userAgent(request)
  const {
    isBot,
    device: { type: userDeviceType = "" },
  } = userAgentParsed

  const response = NextResponse.next()
  response.headers.set("user-device-type", userDeviceType)
  response.headers.set(
    "user-is-desktop",
    !/mobile|tablet/i.test(userDeviceType) ? "1" : "0"
  )

  try {
    if (!isBot) {
      const configData = await ServerQueryClient.fetchQuery(
        ["remote config"],
        general.getRemoteConfig,
        { staleTime: 1000 * 60 }
      )
      if (configData?.maintenanceWeb.status) {
        return NextResponse.redirect(`${BASE_URL}/maintenance`)
        // return NextResponse.redirect(`/maintenance`)
      }
    }
  } catch (error) {
    console.log("=== ERROR MIDDLEWARE: ===\n", error)
  } finally {
    return response
  }
}
