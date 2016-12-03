import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
  render() {
    const { user, page } =  this.props
    const { setYear } = this.props.pageActions
    const { handleLogin } = this.props.userActions

    return (
      <div>
        <Header/>
        <User name={user.name} handleLogin={handleLogin} />
        { user.name ? (
          <Page  name={user.name} posts={page.posts}/>
        ) : (
          <div className="no-fav-msg text-sm-center">Sign in, please. </div>
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
