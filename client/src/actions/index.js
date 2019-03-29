// -------------------------------------------------
import axios from 'axios'
// -------------------------------------------------
import history from '../history'
import { FETCH_USER, FETCH_NODES } from './types'
import Stories from '../assets/storyDB'
// -------------------------------------------------

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
}

export const fetchNodes = () => async (dispatch) => {
    const res = await axios.get('/api/nodes')
    dispatch({
        type: FETCH_NODES,
        payload: res.data
    })
}

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token)
    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
}

export const storyStart = (formValues) => async (dispatch, getState) => {
    const { email } = getState().auth
    const storyAssets = Stories.node01

    const title = storyAssets.title
    const subject = storyAssets.subject
    const body = storyAssets.body
    const image = storyAssets.url
    const key = storyAssets.key
    const recipients = `${formValues.values.opponent}, ${email}`
    const children = storyAssets.children

    const res = await axios.post('/api/nodes/first', {
        title, subject, body, image, key,
        recipients, children
    })

    dispatch({
        type: FETCH_USER,
        payload: res.data
    })

    history.push('/storytree')
}

// -------------------------------------------------