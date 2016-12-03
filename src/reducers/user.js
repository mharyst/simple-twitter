import * as actionTypes from '../constants/User'

const initialState = {
  name: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case (actionTypes.LOGIN_REQUEST): {
      return {
        ...state,
        name: action.name,
      };
    }

    default: {
      return state;
    }
  }
}
