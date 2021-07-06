import axios from "axios";
import _ from "lodash";
import { getDelay } from "./delay.js";
import isErrorState from "./isErrorState.js";
import pendingRequests, { addRequest, failRequest, sortRequests, successRequest } from "./pending.js";
import retry from "./retry.js";

export default (url, data) => {
    addRequest(url, data);
    axios.post(url, data).then(() => {
        successRequest(url, data);
    }).catch(() => {
        failRequest(url, data);
    })
}

//Retry messages
setInterval(() => {
    if(isErrorState()){
        isOnline().then(() => {
            sortRequests();
            let delay = 0;
            pendingRequests.forEach((value, index) => {
                delay = getDelay(index, value);
                if (value.error) {
                    retry(value, delay);
                }
            })
        })
    }
}, 5000);