import * as actionTypes from '../constants/User'

export const handleLogin = (name) => ({
  type: actionTypes.LOGIN_REQUEST,
  name,
})