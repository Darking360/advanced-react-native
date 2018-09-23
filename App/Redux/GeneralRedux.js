import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  generalRequest: ['data'],
  generalSuccess: ['payload'],
  generalFailure: null,
  loginUser: ['userToken'],
  logoutUser: null
})

export const GeneralTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  userToken: null
})

/* ------------- Selectors ------------- */

export const GeneralSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// Logout user
export const logoutUser = state => {
  state.merge({ userToken: null })
}

// Login user
export const loginUser = (state, action) => {
  const { userToken } = action
  return state.merge({ userToken })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GENERAL_REQUEST]: request,
  [Types.GENERAL_SUCCESS]: success,
  [Types.GENERAL_FAILURE]: failure,
  [Types.LOGIN_USER]: loginUser,
  [Types.LOGOUT_USER]: logoutUser,
})
