import UAParser from "ua-parser-js";

export interface UserAgentInterface {
  device: UAParser.IDevice;
}

export default function uaParser(header?: string): UserAgentInterface {
  const uaParsed = UAParser(header);
  return {
    device: {
      vendor: uaParsed?.device?.vendor || "",
      model: uaParsed?.device?.model || "",
      type: uaParsed?.device?.model || "",
    },
  };
}
