import makeRequestKey from "./makeRequestKey.js";

const pendingRequests = [];

export default pendingRequests;

export const addRequest = (url, data) => {
    const pendingKey = makeRequestKey(url, data);
    const pendingRequest = {
        key: pendingKey,
        time: new Date().getTime(),
        error: false,
        url: url,
        data: data
    };
    pendingRequests.push(pendingRequest);
}

export const successRequest = (url, data) => {
    const key = makeRequestKey(url, data)
    _.remove(pendingRequests, (request) => {
        return request.key === key;
    })
}

export const failRequest = (url, data) => {
    const key = makeRequestKey(url, data);
    const request = pendingRequests.find((request) => {
        request.key === key;
    })
    if(request){
        request.error = true;
    }
}

export const sortRequests = () => {
    pendingRequests.sort(sortPending);
}

const sortPending = (a, b) => {
    if (a.time < b.time) {
        return -1;
    }
    if (a.time > b.time) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

