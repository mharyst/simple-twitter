import * as actionTypes from '../constants/Page'

export const createTweet = (post) => ({
  type: actionTypes.POST_ADD,
  post,
  postId: `post${post.id}`
})

export const removeTweet = (postId) => ({
  type: actionTypes.POST_REMOVE,
  postId,
  postIdinComments: `post${postId}`
})

export const addComment = (comment, postId) => ({
  type: actionTypes.COMMENT_ADD,
  comment,
  postId,
})

export const removeComment = (commentId, postId) => ({
  type: actionTypes.COMMENT_REMOVE,
  commentId,
  postId,
})