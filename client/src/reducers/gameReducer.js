// -------------------------------------------------
import {
    GAME_ON,
    GAME_OVER,
    PLAYER1_LIFE,
    PLAYER2_LIFE
} from '../actions/types'
// -------------------------------------------------

const INITIAL_STATE = {
    gameOn: false,
    playerOneLives: 3, 
    playerTwoLives: 3,
}

// -------------------------------------------------
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GAME_ON:
            return {
                ...state,
                gameOn: true
            }
        case GAME_OVER:
            return {
                ...state,
                gameOn: false
            }
        case PLAYER1_LIFE:
            return {
                ...state,
                playerOneLives: state - 1
            }
        case PLAYER2_LIFE:
            return {
                ...state,
                playerTwoLives: state - 1
            }
        default:
            return state
    }
}
// -------------------------------------------------