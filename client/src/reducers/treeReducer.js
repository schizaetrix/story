// -------------------------------------------------
import { FETCH_TREE } from '../actions/types'
// -------------------------------------------------

// -------------------------------------------------
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TREE:
            return action.payload
        default:
            return state
    }
}
// -------------------------------------------------