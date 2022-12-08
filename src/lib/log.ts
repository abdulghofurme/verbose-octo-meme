// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const logType: { [index: string]: string } = {
  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
}

const log = {
  ...Object.keys(logType).reduce<{
    [index: string]: (message?: any, ...optionalParams: any[]) => void
  }>(
    (result, key) => ({
      ...result,
      [key]: (...content) => console.log(logType[key], ...content, "\x1b[0m"),
    }),
    {}
  ),
}

export default log
