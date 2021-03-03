import * as clock from "./actions/clock"
import * as counter from "./actions/counter"

// CLOCK & TIMER ARE SIMILAR TO SUB MODULES

const clockActions = { ...clock, ...counter }


export default clockActions