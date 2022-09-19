import config from "../config/index.js"

export default () => {
    const host = config.backupstate.ip;
    const port = config.backupstate.port;
    return `http://${host}:${port}`
}