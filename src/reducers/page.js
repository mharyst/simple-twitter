import * as actionTypes from '../constants/Page'

const initialState = {
  posts: [
    {
      "id": 1,
      "author": "John",
      "body": "Cool day",
      "date": "13.11.16"
    },
    {
      "id": 2,
      "author": "Robert",
      "body": "Netflix bringing offline playback to video service for the first date",
      "date": "13.11.16"
    }
  ],
  comments: [
    {
      "id": 1,
      "postId": 2,
      "author": "Peter",
      "body": "Yep",
      "date": "13.11.16"
    },
    {
      "id": 2,
      "postId": 2,
      "author": "Ivan",
      "body": "why?",
      "date": "13.11.16"
    },
    {
      "id": 3,
      "postId": 1,
      "author": "Logan",
      "body": "hi!",
      "date": "12.12.16"
    }
  ]
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case actionTypes.POST_ADD: {
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post
        ]
      }
    }

    case actionTypes.POST_REMOVE: {
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.postId),
          ...state.posts.slice(action.postId + 1)
        ]
      }
    }

    case actionTypes.COMMENT_ADD: {
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      }
    }

    case actionTypes.COMMENT_REMOVE: {
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, action.commentId),
          ...state.comments.slice(action.commentId + 1)
        ]
      }
    }

    default: {
      return state
    }
  }
}
