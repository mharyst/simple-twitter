import React from 'react'
import NewCommentForm from './NewCommentForm'

const Comments = ({comments, addComment, removeComment, postId, name }) => {

  const deleteComment = (comment) => {
    const id = comments[postId].indexOf(comment)
    removeComment(id, postId)
  }

  let commentsArr = comments[postId]
  let commentsChild = commentsArr.map((comment, key) => (
    <div className="comment" key={key}>
      <h6>{comment.author}</h6>
      { comment.author === name ?
        <button type="button" className="btn btn-sm btn-danger delete" onClick={() => deleteComment(comment)}>Delete</button> :
        <button type="button" className="btn btn-sm btn-danger delete disabled" >Delete</button>
      }
      <p>{comment.body}</p>
    </div>
  ))
  return (
    <li className="list-group-item">
      <h6 className="card-link comments"><u>Comments:</u></h6>
      <div className="list-group comments-list">{commentsChild}</div>
      <NewCommentForm tweetId={postId} name={name} addComment={addComment} />
    </li>
  )
}

Comments.propTypes = {
  addComment: React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired,
  comments: React.PropTypes.object.isRequired,
  postId: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default Comments