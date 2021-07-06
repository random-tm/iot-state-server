import pendingRequests from "./pending.js"

export const getDelay = (index, currentRequest) => {
    if(index !== 0){
        const previousTime = pendingRequests[index - 1].time;
        const currentTime = currentRequest.time;
        return currentTime - previousTime;
    } else {
        return 0;
    }
}