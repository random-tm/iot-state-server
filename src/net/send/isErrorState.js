import pendingRequests from "./pending.js";

export default () => {
    for(const request of pendingRequests){
        if(request.error){
            return true;
        }
    }
    return false;
}