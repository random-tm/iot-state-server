import _ from "lodash";

export default (state) => {
    let stateClone = _.cloneDeep(state);
    stateClone = clearInternals(stateClone);
    stateClone = clearInternalsFromChanges(stateClone);
    return stateClone;
}

const clearInternals = (state) => {
    for(const key in state){
        if(key.indexOf("internal_") != -1){
            delete state[key];
        }
    }
    return state;
}

const clearInternalsFromChanges = (state) => {
    const clearedChanges = clearInternals(state.changes);
    state.changes = clearedChanges;
    return state;
}