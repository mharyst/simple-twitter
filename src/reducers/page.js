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
  comments: {
    1: [
      {
        "id": 3,
        "author": "Logan",
        "body": "hi!",
        "date": "12.11.16"
      }
    ],
    2: [
      {
        "id": 1,
        "author": "Peter",
        "body": "Yep",
        "date": "13.11.16"
      },
      {
        "id": 2,
        "author": "Ivan",
        "body": "why?",
        "date": "13.11.16"
      }
    ]
  }
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case actionTypes.POST_ADD: {
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post
        ],
        comments: {
          ...state.comments,
          [action.postId]: []
        }
      }
    }

    case actionTypes.POST_REMOVE: {
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.postId),
          ...state.posts.slice(action.postId + 1)
        ],
        comments: {
          ...state.comments,
          [action.postIdinComments]: []
        }
      }
    }

    case actionTypes.COMMENT_ADD: {
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.postId]: [
            ...state.comments[action.postId],
            action.comment
          ]
        }
      }
    }

    case actionTypes.COMMENT_REMOVE: {
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.postId]: [
            ...state.comments[action.postId].slice(0, action.commentId),
            ...state.comments[action.postId].slice(action.commentId + 1)
          ]
        }
      }
    }

    default: {
      return state
    }
  }
}
