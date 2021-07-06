import config from "../config/index.js"

export default () => {
    const host = config.automation.ip;
    const port = config.automation.port;
    return `http://${host}:${port}`
}