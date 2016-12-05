import * as actionTypes from '../constants/User'

export const handleLogin = (name) => ({
  type: actionTypes.LOGIN_REQUEST,
  name,
})

export const signOut = (name = "") => ({
  type: actionTypes.LOGIN_REQUEST,
  name,
})
