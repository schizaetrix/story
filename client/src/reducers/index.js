// -------------------------------------------------
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import nodesReducer from './nodesReducer'
import treeReducer from './treeReducer'
// -------------------------------------------------

// -------------------------------------------------
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    nodes: nodesReducer,
    tree: treeReducer
})
// -------------------------------------------------