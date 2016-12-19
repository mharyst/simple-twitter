import React from 'react'
import Comments from '../containers/Comments'

const Posts = ({posts, removeTweet, name}) => {

  const deleteTweet = (tweet) => {
    const id = posts.indexOf(tweet)
    removeTweet(id)
  }

  let postsChild = posts.map((tweet, key) => (
    <div className={tweet.author === name ? "card card-outline-info" : "card" } key={key}>
      <div className="card-block">
        <h5 className="card-title">{tweet.author}</h5>
        <p className="card-text">{tweet.body}</p>
        <Comments postId={tweet.id} name={name} />
      </div>
      <div className="card-footer text-muted">
      <span className="date">{tweet.date}</span>
      { tweet.author === name ?
        <button type="button" className="btn btn-danger" onClick={() => deleteTweet(tweet)}>Delete</button> :
        <button type="button" className="btn btn-danger disabled" >Delete</button>
      }
      </div>
    </div>
  ))
  return (
    <div className="col-md-8 tweet-feed">
      {postsChild}
    </div>
  )
}

Posts.propTypes = {
  posts: React.PropTypes.array.isRequired,
  removeTweet: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default Posts