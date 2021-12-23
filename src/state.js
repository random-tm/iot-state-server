import _ from "lodash";

let state = {};

export const getState = () => {
    return state;
}

export const updateState = (values) => {
    const oldState = _.cloneDeep(state);
    const newState = { ...state, ...values };
    processToggles(values, newState);
    state = newState;
    if (_.isEqual(oldState, newState)) {
        return {...state, ...{status: "State did not change"}};
    } else {
        return {...state, ...{changes: getChanges()}};
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
    for(key of allKeys){
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

export const getStateFiltered = (values) => {
    if(values && values.length > 0){
        if(values.query){
            if(Array.isArray(values.query)){
                const rawQuery = values.query;
                const requestedFields = rawQuery.split(",");
                const selectedKeys = {};
                for(const field of requestedFields){
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