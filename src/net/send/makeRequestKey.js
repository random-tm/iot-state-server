export default (url, data) => {
    return `${url}-${JSON.stringify(data)}`;

}