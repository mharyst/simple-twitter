import * as actionTypes from '../constants/Page'

export const createTweet = (post) => ({
  type: actionTypes.POST_ADD,
  post,
})

export const removeTweet = (postId) => ({
  type: actionTypes.POST_REMOVE,
  postId,
})

export const addComment = (comment) => ({
  type: actionTypes.COMMENT_ADD,
  comment,
})

export const removeComment = (commentId) => ({
  type: actionTypes.COMMENT_REMOVE,
  commentId,
})