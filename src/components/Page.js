import React from 'react'
import Comments from './Comments'
import NewTweetForm from './NewTweetForm'
import formatDate from '../helpers/formatDate'

const Page = ({ name, posts, comments, createTweet, removeTweet, addComment, removeComment }) => {

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

  const deleteTweet = (tweet) => {
    const id = posts.indexOf(tweet)
    removeTweet(id)
  }

  return (
    <div className="container">
      <NewTweetForm posts={posts} name={name} createTweet={createTweet} />
      <h2>Your feed:</h2>
      <div className="row">
        <div className="col-md-8 tweet-feed">
         { posts.map((tweet) => (
            <div className={tweet.author === name ? "card card-outline-info" : "card" } key={tweet.id}>
              <div className="card-block">
                <h5 className="card-title">{tweet.author}</h5>
                <p className="card-text">{tweet.body}</p>
                <li className="list-group-item">
                  <h6 href="#" className="card-linkc comments"><u>Comments:</u></h6>
                  <Comments postId={tweet.id} comments={comments} removeComment={removeComment} name={name} />
                  <form className="comment-form" onSubmit={postComment} >
                    <textarea className="form-control" id="commentText" data-id={tweet.id} rows="1" placeholder="New comment"></textarea>
                    <button type="submit" className="btn btn-primary btn-sm">Add comment</button>
                  </form>
                </li>
              </div>
              <div className="card-footer text-muted">
              <span className="date">{tweet.date}</span>
              { tweet.author === name ?
                <button type="button" className="btn btn-danger" onClick={() => deleteTweet(tweet)}>Delete</button> :
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
  comments: React.PropTypes.object.isRequired,
  createTweet: React.PropTypes.func.isRequired,
  removeTweet: React.PropTypes.func.isRequired,
  addComment: React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired,
}

export default Page
