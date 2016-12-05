import React from 'react'
import Comments from './Comments'

const Page = ({ name, posts, comments, createTweet, removeTweet, addComment, removeComment }) => {
  
  const formatDate = (date) => {
    let dd = date.getDate()
    if (dd < 10) dd = '0' + dd
    let mm = date.getMonth() + 1
    if (mm < 10) mm = '0' + mm
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy
    return `${dd}.${mm}.${yy}`
  }

  const postTweet = (el) => {
    el.preventDefault()
    const body = el.target.querySelector('#tweetBody').value
    const author = name
    const id = posts.length + 1
    const date = formatDate(new Date)
    body.length > 0 ? createTweet({id, author, body, date}) : alert('Enter tweet, please')
    el.target.querySelector('#tweetBody').value = ''
  }

  const postComment = (el) => {
    el.preventDefault()
    const commentBody = el.target.querySelector('#commentBody')
    const body = commentBody.value
    const author = name
    const postId = parseInt(commentBody.getAttribute("data-id"))
    const id = comments.length + 1
    const date = formatDate(new Date)
    body.length > 0 ? addComment({id, postId, author, body, date}) : alert('Enter comment, please')
    el.target.querySelector('#commentBody').value = ''
  }

  const deleteTweet = (id) => removeTweet(id)

  return (
    <div className="container">
      <div className='row new-tweet'>
        <div className='col-md-6'>
          <h2>New Tweet:</h2>
          <form className="tweet-form" onSubmit={postTweet}>
            <div className="form-group">
              <textarea className="form-control" id="tweetBody" rows="3" placeholder="What`s happening?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Tweet</button>
          </form>
        </div> 
      </div>
      <h2>Your feed:</h2>
      <div className="row">
        <div className="col-md-8 tweet-feed">
         { posts.map((tweet) => (
            <div className="card" key={tweet.id}>
              <div className="card-block">
                <h5 className="card-title">{tweet.author}</h5>
                <p className="card-text">{tweet.body}</p>
                <li className="list-group-item">
                  <h6 href="#" className="card-linkc comments"><u>Comments:</u></h6>
                  <Comments postId={tweet.id} comments={comments} removeComment={removeComment} name={name} />
                  <form className="comment-form" onSubmit={postComment} >
                    <textarea className="form-control" id="commentBody" data-id={tweet.id} rows="1" placeholder="New comment"></textarea>
                    <button type="submit" className="btn btn-primary btn-sm">Add comment</button>
                  </form>
                </li>
              </div>
              <div className="card-footer text-muted">
              <span className="date">{tweet.date}</span>
              { tweet.author === name ?
                <button type="button" className="btn btn-danger" onClick={() => deleteTweet(tweet.id)}>Delete</button> :
                <button type="button" className="btn btn-danger disabled" >Delete</button>
              }
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  posts: React.PropTypes.array.isRequired,
  comments: React.PropTypes.array.isRequired,
  createTweet: React.PropTypes.func.isRequired,
  removeTweet: React.PropTypes.func.isRequired,
  addComment: React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired,
}

export default Page
