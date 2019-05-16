import createReducer from '../utils/createReducer'
import { UserEndpoints } from '../../api'

// Types
export const LOGIN_REQUEST = '[auth] LOGIN / REQUEST'
export const LOGIN_SUCCESS = '[auth] LOGIN / SUCCESS'

export const LOGOUT_REQUEST = '[auth] LOGOUT / REQUEST'
export const LOGOUT_SUCCESS = '[auth] LOGOUT / SUCCESS'

// Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem('user'))
}

// Reducer
export default createReducer(initialState)({
  [LOGIN_SUCCESS]: (state, action) => ({
    user: action.payload.user
  }),

  [LOGOUT_SUCCESS]: () => ({
    user: null
  })
})

// Actions
export const login = () => async dispatch => {
  try {
    dispatch(loginRequest())
    const response = await UserEndpoints.getUser()
    dispatch(loginSuccess(response.data))
    localStorage.setItem('user', JSON.stringify(response.data))
  } catch (error) {
    console.log(`Error occured on ${loginRequest().type}`)
    console.log(error)
  }
}

export const logout = () => async dispatch => {
  try {
    dispatch(logoutRequest())
    localStorage.removeItem('user')
    dispatch(logoutSuccess())
  } catch (error) {
    console.log(`Error occured on ${logoutRequest().type}`)
    console.log(error)
  }
}

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { user } })

export const logoutRequest = () => ({ type: LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
