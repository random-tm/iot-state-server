export default (pendingRequest, delay) => {
    setTimeout(() => {
        axios.post(pendingRequest.url, pendingRequest.data).then(() => {
            const key = makeKey(pendingRequest.url, pendingRequest.data);
            _.remove(pendingRequest, (request) => {
                return request.key === key;
            })
        })
    }, delay);
}