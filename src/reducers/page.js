import * as actionTypes from '../constants/Page'

const initialState = {
  posts: [{"id": 1, "name": "John", "text": "Cool day", "time": 1480720455657, "comments": []},{"id": 2, "name": "Robert", "text": "Netflix bringing offline playback to video service for the first time", "time": 1480720455657, "comments": [{"id": 1, "name": "Peter", "text": "Yep", "time": 1480720455657}]}],
  comments: [],
};

export default function page(state = initialState, action) {

  switch (action.type) {
    case actionTypes.POST_ADD: {
      console.log('id:' + action.postId);
      return { ...state, posts: [...state.posts, {id: action.postId, author: action.author,text: action.text, time: Date.now()}] }
    }

    default: {
      return state
    }
  }
}
