import React from 'react'
import formatDate from '../helpers/formatDate'

const NewCommentForm = ({ tweetId, name, comments, addComment }) => {

  const postComment = (el) => {
    el.preventDefault()
    const author = name
    const commentText = el.target.commentText
    const body = commentText.value
    const postId = commentText.getAttribute("data-id")
    let id
    comments[postId].length === 0 ? id = 0 : id = (comments[postId][comments[postId].length - 1].id) + 1
    const date = formatDate(new Date)
    body.length > 0 ? addComment({id, author, body, date}, postId) : alert('Enter comment, please')
    commentText.value = ''
  }

  return (
    <form className="comment-form" onSubmit={postComment} >
      <textarea className="form-control" id="commentText" data-id={tweetId} rows="1" placeholder="New comment"></textarea>
      <button type="submit" className="btn btn-primary btn-sm">Add comment</button>
    </form>
  )
}

NewCommentForm.proptypes = {
  tweetId: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  comments: React.PropTypes.array.isRequired,
  addComment: React.PropTypes.func.isRequired,
}

export default NewCommentForm