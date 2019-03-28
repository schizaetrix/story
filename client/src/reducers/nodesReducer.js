// -------------------------------------------------
import { FETCH_NODES } from '../actions/types'
// -------------------------------------------------

// -------------------------------------------------
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_NODES:
            return action.payload
        default:
            return state
    }
}
// -------------------------------------------------