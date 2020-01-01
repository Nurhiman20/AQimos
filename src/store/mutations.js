export default {
    // set parameters1
    SET_TEMP(state, value) {
        state.parameters1[0].series.push(value)
    },
    SET_HUM(state, value) {
        state.parameters1[1].series.push(value)
    },
    SET_BATTERY(state, value) {
        state.parameters1[2].series.push(value)
    },

    // set parameters2
    SET_SW(state, value) {
        state.parameters2[0].value = value
    },
    SET_DW(state, value) {
        state.parameters2[1].value = value
    },
    SET_R(state, value) {
        state.parameters2[2].value = value
    },
    SET_L(state, value) {
        state.parameters2[3].value = value
    }
}