import React from 'react'
import Comments from '../containers/Comments'
import NewTweetForm from './NewTweetForm'
import formatDate from '../helpers/formatDate'

const Page = ({ name, posts, createTweet, removeTweet }) => {

  const deleteTweet = (tweet) => {
    const id = posts.indexOf(tweet)
    removeTweet(id)
  }

  return (
    <div className="container">
      <NewTweetForm name={name} createTweet={createTweet} />
      <h2>Your feed:</h2>
      <div className="row">
        <div className="col-md-8 tweet-feed">
         { posts.map((tweet, key) => (
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
          ) )}
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  posts: React.PropTypes.array.isRequired,
  createTweet: React.PropTypes.func.isRequired,
  removeTweet: React.PropTypes.func.isRequired,
}

export default Page
