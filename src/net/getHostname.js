export default (url) => {
    const parts = url.split("/");
    const domainAndType = parts.split(0, 3);
    return domainAndType.join("/");
}