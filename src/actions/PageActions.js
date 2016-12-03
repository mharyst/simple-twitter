import * as actionTypes from '../constants/Page'

export const addPost = (postId) => ({
  type: actionTypes.POST_ADD,
  postId,
})

export const removePost = (postId) => ({
  type: actionTypes.POST_REMOVE,
  postId,
})