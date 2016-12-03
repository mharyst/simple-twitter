import React from 'react'

const Page = ({ name, posts }) => {
  console.log(posts);

  return (
    <div className="container">
      <h2>Tweets for you ({name}):</h2>
      <div className="row">
        <div className="col-md-6">
         { posts.map((tweet, index) => (
            <div className="card" key={index}>
              <div className="card-block">
                <h5 className="card-title">{tweet.name}</h5>
                <p className="card-text">{tweet.text}</p>
                <li className="list-group-item">
                  <span className="tag tag-default tag-pill float-xs-right">{tweet.comments.length}</span>
                  <a href="#" className="card-link">Comments</a>
                </li>
              </div>
              <div className="card-footer text-muted">
                13.11.2016
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
}

export default Page
