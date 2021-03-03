import { DECREMENT, INCREMENT, RESET, TICK } from '../types'

const initialState = {
    count: 0,
    lastUpdate: 0,
    light: false,

}

const clockReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        case RESET:
            return { ...state, count: 0 }

        case TICK:
            return {
                ...state,
                lastUpdate: payload.ts,
                light: !!payload.light,

            }
        default:
            return state
    }
}

export default clockReducer