import _ from "lodash";
import config from "./config/index.js";

let state = config.state;

export const getState = () => {
    return state;
}

export const updateState = (values) => {
    const cleanValues = skipKeys(values);
    const oldState = _.cloneDeep(state);
    const newState = { ...state, ...cleanValues };
    processToggles(cleanValues, newState);
    state = newState;
    if (_.isEqual(oldState, newState)) {
        return {...state, ...{status: "State did not change"}};
    } else {
        return {...state, ...{changes: getChanges(oldState, newState)}};
    }
}

const processToggles = (values, newState) => {
    const keys = Object.keys(values);
    for(const key of keys){
        if(newState[key] === "toggle"){
            newState[key] = !state[key];
        }
    }
}

const getChanges = (oldState, newState) => {
    const changes = {};
    const oldKeys = Object.keys(oldState);
    const newKeys = Object.keys(newState);
    const allKeys = _.union(oldKeys, newKeys);
    for(const key of allKeys){
        const oldVal = oldState[key];
        const newVal = newState[key];
        if(!_.isEqual(oldVal, newVal)){
            changes[key] = {
                new: newVal,
                old: oldVal
            }
        }
    }
    return changes;
}

const skipKeys = (dirtyState) => {
    const keysToSkip = ["publishKey", "retry", "retryState"];
    for(const key of keysToSkip){
        delete dirtyState[key];
    }
    return dirtyState;
}

export const getStateFiltered = (values) => {
    if(values){
        if(values.query){
            if(Array.isArray(values.query)){
                const requestedFields = values.query;
                const selectedKeys = {};
                for(const field of requestedFields){
                    if(requestedFields.length == 1){
                        return state[field];
                    }
                    selectedKeys[field] = state[field];
                }
                return selectedKeys;
            } else {
                console.warn("Found query, but was not array");
            }
        }
    }
    return getState();
}