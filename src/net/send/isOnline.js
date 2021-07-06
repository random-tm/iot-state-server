import axios from "axios";
import getHostname from "../getHostname.js";
import pendingRequests from "./pending";

export default () => {
    const requestPath = pendingRequests[0].url;
    const hostName = getHostname(requestPath);
    return axios.get(hostName)
}