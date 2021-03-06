import React from 'react'
import formatDate from '../helpers/formatDate'
import { v4 } from 'node-uuid'

const NewCommentForm = ({ tweetId, name, addComment }) => {

  const postComment = (el) => {
    el.preventDefault()
    const author = name
    const commentText = el.target.commentText
    const body = commentText.value
    const postId = tweetId
    const id = v4()
    const date = formatDate(new Date)
    body.length > 0 ? addComment({id, author, body, date}, postId) : alert('Enter comment, please')
    commentText.value = ''
  }

  return (
    <form className="comment-form" onSubmit={postComment} >
      <textarea className="form-control" id="commentText" rows="1" placeholder="New comment"></textarea>
      <button type="submit" className="btn btn-primary btn-sm">Add comment</button>
    </form>
  )
}

NewCommentForm.proptypes = {
  tweetId: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  addComment: React.PropTypes.func.isRequired,
}

export default NewCommentForm