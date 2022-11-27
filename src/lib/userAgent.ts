import UAParser from "ua-parser-js";

export interface UserAgentInterface {
  device: UAParser.IDevice;
  isUserMobile: boolean
}

export default function uaParser(header?: string): UserAgentInterface {
  const uaParsed = UAParser(header);
  return {
    device: {
      vendor: uaParsed?.device?.vendor || "",
      model: uaParsed?.device?.model || "",
      type: uaParsed?.device?.type || "",
    },
    isUserMobile: uaParsed?.device?.type === 'mobile' || uaParsed?.device?.type === 'tablet'
  };
}
