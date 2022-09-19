import fs from "fs";

const configRaw = fs.readFileSync(`./config.json`, {encoding: "utf-8"});
const stateRaw = fs.readFileSync(`./state.json`, {encoding: "utf-8"});
const config = JSON.parse(configRaw);
const state = JSON.parse(stateRaw);
config.state = state;
export default config;