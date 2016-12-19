import React from 'react'
import Posts from '../containers/Posts'
import NewTweetForm from './NewTweetForm'
import formatDate from '../helpers/formatDate'

const Page = ({ name, createTweet}) => {

  return (
    <div className="container">
      <NewTweetForm name={name} createTweet={createTweet} />
      <h2>Your feed:</h2>
      <div className="row">
        <Posts name={name} />
      </div>
    </div>
  )
}

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  createTweet: React.PropTypes.func.isRequired,
}

export default Page
