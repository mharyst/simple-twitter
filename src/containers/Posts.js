import { connect } from 'react-redux'
import { removeTweet } from '../actions/PageActions'
import Posts from '../components/Posts'

const mapStateToProps = (state) => ({
  posts: state.page.posts,
})

const mapDispatchToProps = (dispatch) => ({
  removeTweet: (postId) => {
    dispatch(removeTweet(postId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
