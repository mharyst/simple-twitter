import React from 'react'
import formatDate from '../helpers/formatDate'

const NewTweetForm = ({ posts, name, createTweet }) => {

  const postTweet = (el) => {
    el.preventDefault()
    let body = el.target.tweetBody.value
    const author = name
    let id
    posts.length === 0 ? id = 0 : id = (posts[posts.length - 1].id) + 1
    const date = formatDate(new Date)
    body.length > 0 ? createTweet({id, author, body, date}) : alert('Enter tweet, please')
    el.target.tweetBody.value = ''
  }

  return (
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
  )
}

NewTweetForm.proptypes = {
  name: React.PropTypes.string.isRequired,
  posts: React.PropTypes.array.isRequired,
  createTweet: React.PropTypes.func.isRequired,
}

export default NewTweetForm