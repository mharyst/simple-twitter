import React from 'react'


const Comments = ({ postId, comments, removeComment, name }) => {

  const currPostId = `post${postId}`

  const deleteComment = (comment) => {
    const id = comments[currPostId].indexOf(comment)
    removeComment(id, currPostId)
  }

  const newCommentForm = () => (
    <form className="comment-form" onSubmit={postComment} >
      <textarea className="form-control" id="commentBody" data-id={tweet.id} rows="1" placeholder="New comment"></textarea>
      <button type="submit" className="btn btn-primary btn-sm">Add comment</button>
    </form>
  )
  let commentsArr = comments[currPostId]
  let commentsChild = commentsArr.map(comment => (
    <div className="comment" key={comment.id}>
      <h6 className="">{comment.author}</h6>
      { comment.author === name ?
        <button type="button" className="btn btn-sm btn-danger delete" onClick={() => deleteComment(comment)}>Delete</button> :
        <button type="button" className="btn btn-sm btn-danger delete disabled" >Delete</button>
      }
      <p className="">{comment.body}</p>
    </div>
  ))
  return (
    <div className="list-group comments-list">{commentsChild}</div>
  )
}

Comments.propTypes = {
  postId: React.PropTypes.number.isRequired,
  removeComment: React.PropTypes.func.isRequired,
  comments: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default Comments