import { connect } from 'react-redux'
import { addComment, removeComment } from '../actions/PageActions'
import Comments from '../components/Comments'

const mapStateToProps = (state) => ({
  comments: state.page.comments,
})

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment, postId) => {
    dispatch(addComment(comment, postId))
  },
  removeComment: (id, postId) => {
    dispatch(removeComment(id, postId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
